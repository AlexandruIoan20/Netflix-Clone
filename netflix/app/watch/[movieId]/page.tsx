export const dynamic = 'force-dynamic'

import React from 'react'; 
import getMovie from '@/app/actions/getMovie';
import BackButton from './components/BackButton';

interface IParams { 
    movieId: string, 
}

const page = async ({ params }: { params: IParams }) => {
    const movie = await getMovie(params.movieId)
  return (
    <div className = 'h-full w-full bg-black'>
        <nav className = 'fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
            <BackButton /> 
            <p className = 'text-white text-1xl md:text-3xl font-semibold'>
                <span className = 'font-light'> Watching: </span>
                { movie?.title }
            </p>
        </nav>  
        <video 
            autoPlay
            controls
            className = 'h-full w-full'
            src = { movie?.videoUrl }></video>
    </div>
  )
}

export default page