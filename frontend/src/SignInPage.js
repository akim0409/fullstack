import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { apiFetch } from "./services";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const response = await apiFetch({
      path: "/users",
      method: "POST",
      body: { username, password },
    });

    if (response.status === 409) {
      setError("Username already exists");
    } else {
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    }
  };
  
  const handleSignIn = async ({ username, password }) => {
    const response = await apiFetch({
      path: "/users/session",
      method: "POST",
      body: { username, password },
    });

    if (response.status === 401) {
      setError("Username or password incorrect");
    } else {
      navigate("/home");
    }
  };

  const handleFormSignIn = async () => {
    handleSignIn({ username, password });
  };

  const handleDemoSignIn = async () => {
    handleSignIn({ username: "testuser", password: "password" });
  };

  const signUpForm = (
    <AuthForm
      title="Create an Account"
      handleSubmit={handleSignUp}
      buttonLabel="Sign Up"
      error={error}
      fields={[
        {
          name: "Username",
          value: username,
          handleChange: (e) => setUsername(e.target.value),
        },
        {
          name: "Password",
          value: password,
          handleChange: (e) => setPassword(e.target.value),
          hide: true,
        },
        {
          name: "Password Confirmation",
          value: confirmPassword,
          handleChange: (e) => setConfirmPassword(e.target.value),
          hide: true,
        },
      ]}
    />
  );

  const signInForm = (
    <AuthForm
      title="Sign In"
      handleSubmit={handleFormSignIn}
      handleDemoSignIn={handleDemoSignIn}
      buttonLabel="Sign In"
      error={error}
      fields={[
        {
          name: "Username",
          value: username,
          handleChange: (e) => setUsername(e.target.value),
        },
        {
          name: "Password",
          value: password,
          handleChange: (e) => setPassword(e.target.value),
          hide: true,
        },
      ]}
    />
  );

  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-sky-100">
      {isSignIn ? signInForm : signUpForm}
      <div
        className="my-3 text-zinc-500 cursor-pointer select-none"
        onClick={() => {
          setIsSignIn(!isSignIn);
        }}
      >
        {isSignIn ? (
          <>
            Don't have an account?{" "}
            <span className="underline text-sky-600">Create One</span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span className="underline text-sky-600">Sign In</span>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
