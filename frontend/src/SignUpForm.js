import { useState } from 'react';
import { apiFetch } from './services';


const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState(''); 
  
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    const response = await apiFetch({
      path: '/users',
      method: 'POST',
      body: { username, password }
    });

    if (response.status === 409) {
      setUsernameError('Username already exists');
    } else {
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setUsernameError('');
      setPasswordError('');
    }
  };
  
  return (
    <div className='bg-zinc-100 h-screen flex flex-col items-center'>
      <div className='text-3xl'>Create an Account</div>
      <form
        className='flex flex-col text-white'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className='flex flex-col items-center'>
          <div className='text-sm text-red-500'>{usernameError}</div>
          <div className='text-sm text-red-500'>{passwordError}</div>
        </div>

        <input
          className='m-1 py-2 px-4 bg-zinc-700 rounded-lg'
          placeholder='Username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <input
          className='m-1 py-2 px-4 bg-zinc-700 rounded-lg'
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          
        />
        <input
          className='m-1 py-2 px-4 bg-zinc-700 rounded-lg'
          placeholder='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
        />
        <button className='m-1 py-1 px-4 rounded-lg bg-orange-400 text-white font-semibold'>Create Account</button>
      </form>
    </div>
  )
};

export default SignUpForm;