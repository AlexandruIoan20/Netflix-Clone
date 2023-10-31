import getSession from "./getSession";
import prismadb from '../../libs/prismadb'; 

const getAllMovies = async  () => { 
    try { 
        const session = await getSession(); 

        if(!session?.user?.email)  { 
            return null 
        }; 

        const movies = await prismadb.movie.findMany(); 
        return movies; 
    } catch(err: any) { 
        console.log(err); 
        return null; 
    }
}; 

export default getAllMovies; 