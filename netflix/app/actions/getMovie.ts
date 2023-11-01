import getSession from "./getSession";
import prismadb from '../../libs/prismadb'; 

const getMovie = async (movieId: string) => {
    try { 
        const session = await getSession(); 

        if(!session?.user?.email)
            return null; 

        const movie = await prismadb.movie.findUnique({ 
            where:{ 
                id: movieId, 
            }
        }); 
        
        return movie; 
    } catch(err: any) {  
        console.log(err); 
        return null; 
    }
}; 

export default getMovie; 