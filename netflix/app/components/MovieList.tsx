'use client'

import { Movie, User } from "@prisma/client";
import { isEmpty } from "lodash"; 
import MovieCard from "./MovieCard";

interface Props { 
    movies: Movie [], 
    title: string, 
    currentUser: User, 
}

const MovieList = ({ movies, title, currentUser}: Props ) => {
    if(isEmpty(movies)) { 
        return null; 
    }
  return (
    <div className = 'px-4 md:px-12 mt-4 space-y-8'>
        <div>
            <p className = 'text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
                { title }
            </p>
            <div className = 'grid grid-cols-4 gap-2'>
                { movies.map(movie => { 
                    return ( 
                        <MovieCard currentUser = { currentUser } key = { movie.id } movie = { movie } />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default MovieList