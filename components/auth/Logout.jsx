import { doLogout } from "@/app/actions/logout"

const Logout = () => {
  return (
    <form action={doLogout}>
      <button
        className="p-1 my-2 text-white bg-blue-400 rounded"
        type="submit"
      >
        Logout
      </button>
    </form>
  )
}

export default Logout