'use client'; 

import { useState, useEffect } from 'react';
import NavbarItem from './NavbarItem';
import MenuHolder from './MenuHolder'; 

import { BsSearch, BsBell  } from 'react-icons/bs';

const TOP_OFFSET = 66; 

const Navbar = () => {
    const [ showBackround, setShowBackgorund ] = useState <boolean> (false); 

    useEffect( () => { 
        const handleScroll = () => { 
            if(window.scrollY >= TOP_OFFSET) { 
                setShowBackgorund(true); 
            } else { 
                setShowBackgorund(false)
            }
        }

        window.addEventListener('scroll', handleScroll); 

        return () => { 
            window.removeEventListener('scroll', handleScroll); 
        }
    }, [])
  return (
    <nav className = 'w-full fixed z-40'>
        <div
            className = { `px-4 md:px-16 py-6 flex flex-row items-center transition duration-500
                ${showBackround ? 'bg-zinc-900 bg-opacity-90' :  "" }`  } 
        >
            <img 
                className = 'h-4 lg:h-7'    
                src="/images/logo.png" 
                alt="logo"     
            />
            <div className = 'flex-row ml-8 gap-7 hidden lg:flex'>
                <NavbarItem label = "Home" /> 
                <NavbarItem label = "Series" /> 
                <NavbarItem label = "Films" /> 
                <NavbarItem label = "New & Popular" /> 
                <NavbarItem label = "My List" /> 
                <NavbarItem label = "Browse by languages" /> 
            </div>
            <MenuHolder>
                <div className = 'flex flex-row ml-auto gap-7 items-center'>
                    <div className = 'text-gray-200 hover:text-gray-300 cursor-pointer transition'>
                        <BsSearch /> 
                    </div>
                    <div className = 'text-gray-200 hover:text-gray-300 cursor-pointer transition'>
                        <BsBell /> 
                    </div>
                </div>    
            </MenuHolder> 
        </div>
    </nav>
  )
}

export default Navbar