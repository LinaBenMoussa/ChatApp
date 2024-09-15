import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = () => {
  const {setselectedConversation}=useConversation();
  const {conversations} = useGetConversations();
  const [search, setSearch]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error('Please enter at least 3 search words')
    }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    console.log("conversation",conversation)
    if(conversation){
      setselectedConversation(conversation)
      setSearch("")
    }else{
      return toast.error('No such user found');
    }
  }

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." className="input input-bordered w-full max-w-xs" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
        <button type="submit" className="btn btn-circle btn-primary m-1"><FaSearch /></button>
    </form>
  )
}

export default SearchInput