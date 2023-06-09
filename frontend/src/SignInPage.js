import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { apiFetch } from "./services";
import smallDogs from "./images/smallDogsPlaying1.svg";

const SignInPage = (props) => {
  const { setSessionToken } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const response = await apiFetch({
      path: "/users",
      method: "POST",
      body: { username, password },
    });

    if (response.status === 409) {
      setError("Username already exists");
    } else {
      const { token } = await response.json();
      setSessionToken(token);
      navigate("/");
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
      const { token } = await response.json();
      setSessionToken(token);
      navigate("/");
    }
  };

  const handleFormSignIn = async () => {
    return handleSignIn({ username, password });
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
          validate: () => {
            if (username.length < 5) {
              setError("username must be longer than 4 characters");
              return false;
            }
            return true;
          },
        },
        {
          name: "Password",
          value: password,
          handleChange: (e) => setPassword(e.target.value),
          hide: true,
          validate: () => {
            if (password.length < 6) {
              setError("password must be longer than 5 characters");
              return false;
            }
            return true;
          },
        },
        {
          name: "Password Confirmation",
          value: confirmPassword,
          handleChange: (e) => setConfirmPassword(e.target.value),
          hide: true,
          validate: () => {
            if (password !== confirmPassword) {
              setError("Passwords do not match");
              return false;
            }
            return true;
          },
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
          validate: () => true,
        },
        {
          name: "Password",
          value: password,
          handleChange: (e) => setPassword(e.target.value),
          hide: true,
          validate: () => true,
        },
      ]}
    />
  );

  return (
    <div className="flex items-center justify-center flex-1 bg-sky-100 pt-24 pb-64 px-6">
      <div className="flex flex-wrap items-center justify-center lg:justify-between max-w-5xl w-full">
        <div>
          <div className="max-w-lg text-center leading-relaxed mb-6 font-ubuntu text-3xl text-sky-800/80">
            Find play dates for your furry friend with{" "}
            <span className="ml-1 text-4xl text-orange-400 font-semibold">
              Bar<span className="text-sky-600">kr</span>
            </span>
          </div>
          <div>
            <img className="w-[500px]" src={smallDogs} alt="dogs" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          {isSignIn ? signInForm : signUpForm}
          <div
            className="my-3 text-stone-500 cursor-pointer select-none"
            onClick={() => {
              setIsSignIn(!isSignIn);
              setError("");
              setPassword("");
              setConfirmPassword("");
              setUsername("");
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
      </div>
    </div>
  );
};

export default SignInPage;
