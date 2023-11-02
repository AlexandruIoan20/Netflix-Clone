'use client'; 

import MobileMenu from './MobileMenu';
import { useCallback, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'; 
import AccountMenu from './AccountMenu';
import { User } from '@prisma/client';

interface Props { 
    children: React.ReactNode, 
    currentUser: User
}

const MenuHolders = ({ children, currentUser }: Props) => {
    const [ showMobileMenu, setShowMobileMenu ] = useState <boolean> (false); 
    const [ showAccountMenu, setShowAccountMenu ] = useState <boolean> (false);

    const toggleMobileMenu = useCallback( () => {
        setShowMobileMenu((currentValue) => !currentValue); 
     }, [])

     const toggleAccountMenu = useCallback( () => {
      setShowAccountMenu((currentValue) => !currentValue); 
   }, [])
  return (
    <>
      <div  
          onClick = { toggleMobileMenu }
          className = 'lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
          <p className = 'text-white text-sm font-medium'> Browse </p>
          <BsChevronDown className = { `text-white transition ${showMobileMenu ?  'rotate-180' : 'rotate-0'}`}  /> 
          <MobileMenu visible = { showMobileMenu } /> 
      </div>
      { children }
      <div onClick = { toggleAccountMenu  } className = 'flex flex-row cursor-pointer relative items-center ml-4 gap-2'>
        <div className = 'w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden flex-row'>
            <img src="/images/default-green.png" alt="avatar" />
            <BsChevronDown className = { `text-white transition ${showAccountMenu ?  'rotate-180' : 'rotate-0'}`} /> 
            <AccountMenu currentUser = { currentUser } visible = { showAccountMenu } /> 
        </div>
      </div>
    </>

  )
}

export default MenuHolders