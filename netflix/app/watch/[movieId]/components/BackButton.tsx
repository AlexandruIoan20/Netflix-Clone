'use client'; 

import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from 'react-icons/ai'; 

const BackButton = () => {
    const router = useRouter(); 
  return (
        <button className = 'hover:scale-110 transition duration-300'>
            <AiOutlineArrowLeft onClick = { () => { router.push("/") } } className = 'text-white' size = { 40 } /> 
        </button>
  )
}

export default BackButton