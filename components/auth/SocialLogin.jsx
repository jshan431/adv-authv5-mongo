import { doSocialLogin } from "@/app/actions/social-login"

const SocialLogin = () => {
  return (
    <form action={doSocialLogin}>
      <button 
        className="p-1 m-1 text-lg text-white bg-pink-400 rounded-md"
        type="submit" name="action" value="google">
        Sign In With Google
      </button>
      {/* <button 
        className="p-1 m-1 text-lg text-black bg-white rounded-md"
        type="submit" name="action" value="github">
        Sign In with Github
      </button> */}
    </form>
  )
}

export default SocialLogin