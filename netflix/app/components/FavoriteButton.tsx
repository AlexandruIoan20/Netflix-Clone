'use client'; 

import { User } from "@prisma/client";
import { useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface Props{ 
  movieId: string, 
  currentUser: User, 
}

const FavoriteButton = ({ movieId, currentUser}: Props) => {
  const router = useRouter(); 
  const isFavorite = useMemo( () => currentUser?.favouriteIds.includes(movieId), [ currentUser, movieId ]); 

  const toggleFavorites = useCallback( async () => { 
    let response; 

    if(isFavorite) { 
      response = await fetch("/api/favorite", { 
        method: "DELETE", 
        mode: "cors", 
        body: JSON.stringify({ movieId }), 
        headers: { 
          "Content-Type": "application/json", 
        }
      })
    } else { 
      response = await fetch("/api/favorite", { 
        method: "POST", 
        mode: "cors", 
        body: JSON.stringify({ movieId }), 
        headers: { 
          'Content-Type': "application/json"
        }
      })
    }; 

    if(response.ok) { 
      router.refresh(); 
      return;   
    }
  }, [ movieId, isFavorite, currentUser ]); 

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus; 

  return (  
    <div
      onClick = { toggleFavorites }
      className = {`
      cursor-pointer
      group/item
      w-6
      h-6
      lg:w-10
      lg:h-10
      border-white
      border-2
      rounded-full
      flex
      ml-2
      items-center
      justify-center
      transition
      hover:border-neutral-300

    `}> 
      <Icon className = 'text-white' size = { 25 } /> 
    </div>
  )
}

export default FavoriteButton