import LoginForm from "@/components/auth/LoginForm";

import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="my-3 text-3xl">Hey, time to Sign In</h1>
      <LoginForm />
      <p className="my-3">
        Don't Have an account?
        <Link href="/register" className="mx-2 underline">Register</Link>
      </p>
    </div>
  )
}

export default LoginPage