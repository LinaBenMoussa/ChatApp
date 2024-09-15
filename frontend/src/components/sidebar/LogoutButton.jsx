import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const {loading,logout}=useLogout();
  return (
    <>
    {loading ?(
      <span className="loading loading-spinner"></span>
    ):(
      <div className="mt-auto " onClick={logout}><CiLogout className="w-6 h-6 "/></div>
    )}
    </>
  )
}

export default LogoutButton