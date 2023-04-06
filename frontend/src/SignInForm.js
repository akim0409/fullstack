import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "./services";

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await apiFetch({
      path: '/users/session',
      method: 'POST',
      body: { username, password }
    })

    if (response.status === 401) {
      setError('Username or password incorrect');
    } else {
      navigate('/home');
    }
  };

  return (
    <div>
      {error}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input 
        placeholder='username'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        />
        <input 
        placeholder='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        />
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm;