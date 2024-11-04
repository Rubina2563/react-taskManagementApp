import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
 handleLogin(email,password)
    setEmail('');
    setPassword('');

  }
  return (
    <div className='w-full h-screen bg-slate-500 flex items-center justify-center'>
      <div className='bg-black h-1/2 w-1/2 flex items-center justify-center'>
        <form
          onSubmit={(e)=>{submitHandler(e)}}
          className='flex flex-col items-center'>
          <input required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='m-2 p-2 border-2 bg-transparent  rounded-full text-md' type='password' placeholder='password'></input>
          <input required
          
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}className='m-2 p-2 border-2 bg-transparent rounded-full text-md' type='email' placeholder='email'></input>
          <button type='submit' className='bg-lime-300 rounded-md text-lime-900 font-bold w-1/2 my-3'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login