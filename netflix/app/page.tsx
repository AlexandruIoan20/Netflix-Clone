'use client'; 

import { signOut } from "next-auth/react";

const page = () => {
  return (
    <div className = 'text-center font-semibold'>
      <button onClick={ () => { signOut()}} className = 'bg-white'> log out </button>
    </div>
  )
}

export default page