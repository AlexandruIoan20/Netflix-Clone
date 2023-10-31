'use client'; 

import { User } from '@prisma/client'
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
    currentUser: User, 
}

const ProfileGroup = ({ currentUser }: Props) => {
    const router = useRouter(); 
  return (
    <div className = 'flex items-center justify-center gap-8 mt-10'>
        <div onClick = { () => { router.push("/") }}>

            <div className = 'group flex-row w-44 mx-auto'>
                <div className = 'w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
                    <img src="/images/default-green.png" alt="profile" />
                </div>
                <div className = 'mt-4 text-gray-400 text-2xl text-center group-hover:text-white'> { currentUser?.name } </div>
            </div>

        </div>
    </div>
  )
}

export default ProfileGroup