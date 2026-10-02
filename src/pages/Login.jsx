import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
  } 
  return (
    <div className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto p-8 items-start min-w-[340px]  rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state === 'Sign up' ? "Create Account" : "Login"}</p>
          <p>{state === 'Sign up' ? "Sign up" : "Login"} to book appointment</p>
          {
            state === 'Sign up' && <div className='w-full'>
              <p>Full name</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          }
          
          <div className='w-full'>
              <p>Email</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className='w-full'>
              <p>Full name</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-base '>{state === 'Sign up' ? "Create Account" : "Login"}</button>
          {
            state === "Sign up" ? <p>Already have an account? <span className='text-primary underline cursor-pointer' onClick={() => setState('Login')}>Login Here</span></p> : <p>Create a new account <span onClick={() => setState('Sign up')} className='text-primary underline cursor-pointer'>Click here</span></p>
          }
        </div>
    </div>
  )
}

export default Login
