import getSession from "./getSession";
import prismadb from '../../libs/prismadb'; 

const getRandomMovie = async () =>  { 
    try { 
        const session = await getSession(); 

        if(!session?.user?.email) { 
            return null; 
        }

        const movieCount = await prismadb.movie.count(); 
        const randomIndex = Math.floor(Math.random() * movieCount); 

        const randomMovies = await prismadb.movie.findMany({ 
            take: 1, 
            skip: randomIndex, 
        }); 

        return randomMovies[0]; 
    } catch(err: any) { 
        console.log(err); 
        return null; 
    }
}; 

export default getRandomMovie; 