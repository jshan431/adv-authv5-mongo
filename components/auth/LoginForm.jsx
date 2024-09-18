'use client'

import SocialLogin from "@/components/auth/SocialLogin"

// import { doCrendentialLogin } from "@/app/actions/social-login"

import { useRouter } from "next/navigation"

import { useState } from 'react'

const LoginForm = () => {

  const [error, setError] = useState("")
  const router = useRouter()

  async function handleFormSubmit(event){
    event.preventDefault();
    // try{
    //   const formData = new FormData(event.currentTarget);
    //   const response = await doCrendentialLogin(formData);
    //   if(!!response.error){
    //     setError(response.error.message);
    //   } else {
    //     router.push('/home');
    //   }
    // } catch(e){
    //   console.error(e)
    //   setError("Check your credentials")
    // }
  }

  return (
    <>
      <div className="text-xl text-red-500">{error}</div>
      <form className="flex flex-col items-center p-3 my-5 border border-gray-200 rounded-md"
        onSubmit={handleFormSubmit}
      >
        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input className="mx-2 border border-gray-500 rounded" type="email" name="email" id="email" />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input className="mx-2 border border-gray-500 rounded" type="password" name="password" id="password" />
        </div>
        <button type="submit" className="flex items-center justify-center mt-4 bg-orange-300 rounded w-36">
          Credentials Login
        </button>
      </form>
      <SocialLogin />
    </>

  )
}

export default LoginForm