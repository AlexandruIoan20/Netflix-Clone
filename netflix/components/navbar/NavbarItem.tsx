import React from 'react'; 

interface NavbarItemProps { 
    label: string, 
}

const NavbarItem = ({ label }: NavbarItemProps) => {
  return (
    <div className = 'text-white cursor-pointer font-medium hover:text-gray-300 transition'> { label } </div>
  )
}

export default NavbarItem