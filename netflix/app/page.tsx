'use client'; 

import { signOut } from "next-auth/react";

const HomePage = () => {
  return (
    <div className = ''>
      <button onClick={ () => { signOut()}} className = 'h-10 w-full bg-white'> Logout! </button>
    </div>
  )
}

export default HomePage