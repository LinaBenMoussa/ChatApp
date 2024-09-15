import toast from 'react-hot-toast';
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
const useSignUp = () => {
  const [loading,setLoading] = useState(false)
  const {setAuthUser}=useAuthContext();
  const signUp=async({fullName,username,password,confirmPassword,gender})=>{
    const success=handleInputErrors(fullName,username,password,confirmPassword,gender);
    if(!success) return;
    setLoading(true);
    try {
        const res =await fetch('/api/auth/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fullName,username,password,confirmPassword,gender})})
        const data = await res.json();
        console.log(data);
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem("chat_user",JSON.stringify(data))
        setAuthUser(data) 
        
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false);
    }

  }
  return {signUp,loading}
}

export default useSignUp


function handleInputErrors(fullname,username,password,confirmPassword,gender){
    if(!fullname || !username || !password || !confirmPassword || !gender){
        toast.error("you must fill all fields");
        return false
    }
    if(password!==confirmPassword){
        toast.error("passwords don't match");
        return false
    }
    if(password.length<6){
        toast.error("password must be at least 6 characters");
        return false
    }
    return true

}