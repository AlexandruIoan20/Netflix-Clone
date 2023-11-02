'use client';  

import { useState, useCallback} from 'react';
import { Movie, User } from '@prisma/client';
import { BsFillPlayFill } from 'react-icons/bs';
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/navigation';
import InfoModal from './InfoModal';
import { BiChevronDown } from 'react-icons/bi'; 

interface Props { 
    movie: Movie, 
    currentUser: User
}

const MovieCard = ({ movie, currentUser }: Props) => {
    const router = useRouter(); 

    const [ modalOpen, setModalOpen ] = useState <boolean> (false); 

    const handleOpenModal = useCallback( () => {
        setModalOpen(true); 
     }, [ currentUser, movie ]); 
  return (
    <>
        <div className = 'group bg-zinc-900 col-span relative h-[12vw]'>
            <img 
                className = { `cursor-pointer object-cover transition duration shadow-xl rounded-md
                    group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]`}
                src = { movie.thumbnailUrl } alt="thumbnail"
            />
            <div className = 
                { `opacity-0 
                    absolute 
                    top-0 
                    transition 
                    duration-200
                    z-10
                    invisible
                    sm:visible
                    delay-300
                    w-full 
                    scale-0 
                    group-hover:scale-125 
                    group-hover:-translate-y-[6vw] 
                    group-hover:opacity-100` }
            >
                <img 
                    className = {`
                        cursor-pointer 
                        transition
                        duration
                        object-cover
                        shadow-xl   
                        rounded-t-md
                        w-full
                        h-[12vw]
                    `}
                    src = { movie.thumbnailUrl } alt="thumbnail" 
                />
                <div className = {`
                    z-10
                    bg-zinc-800
                    p-2
                    lg:p-4
                    absolute 
                    w-full
                    transition
                    shadow-md
                    rounded-b-md
                `}
                >
                    <div className = 'flex flex-row items-center'>
                        <div 
                            className = 'cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300'
                            onClick = { () => { router.push(`/watch/${movie?.id}`) }}>
                            <BsFillPlayFill className = 'w-6 h-6'/> 
                        </div>
                        <FavoriteButton currentUser = { currentUser } movieId = { movie.id } /> 
                        <div 
                            onClick = { handleOpenModal }
                            className = 'cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
                            <BiChevronDown className = 'text-white group-hover/item:text-neutral-300' size = { 30 } /> 
                        </div>
                    </div>

                    <p className = 'text-green-400 font-semibold mt-4 cursor-default'>
                        New <span className = 'text-white'> 2023 </span>
                    </p>

                    <div className = 'flex flex-row mt-4 gap-2 items-center'>
                        <p className = 'text-white text-[10px] lg:text-sm'> { movie.duration  } </p>
                    </div>
                    <div className = 'flex flex-row mt-4 gap-2 items-center'>
                        <p className = 'text-white text-[10px] lg:text-sm'> { movie.genre  } </p>
                    </div>
                </div>
            </div>
        </div>
        <InfoModal 
            currentUser = { currentUser }
            onClose = { () => { setModalOpen(false)}}
            visible = { modalOpen }
            movie = { movie }
        /> 
    </>

  )
}

export default MovieCard