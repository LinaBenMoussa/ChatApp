import toast from 'react-hot-toast';
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser}=useAuthContext();

  const logout=async()=>{
    setLoading(true)
    try {
      const res =await fetch('/api/auth/logout',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await res.json()
      console.log(data)
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.removeItem('chat_user')
      setAuthUser(null)
      window.location.reload()
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }
  return {logout,loading};
}
export default useLogout