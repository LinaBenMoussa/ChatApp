import toast from 'react-hot-toast';
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
const useLogin=()=>{
    const {setAuthUser}=useAuthContext();
    const [loading,setLoading]=useState(false)
    const login=async({username,password})=>{
        try {
            setLoading(true)
            const res =await fetch('/api/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username,password})
            })
            const data = await res.json()
            console.log(data)
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem('chat_user',JSON.stringify(data))
            setAuthUser(data)
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return {loading,login}
}

export default useLogin