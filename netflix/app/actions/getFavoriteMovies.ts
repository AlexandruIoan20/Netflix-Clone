import getSession from "./getSession";
import prismadb from '../../libs/prismadb'; 
import getCurrentUser from "./getCurrentUser";

const getFavouriteMovies = async () => {
    try { 
        const session = await getSession(); 
        if(!session?.user?.email) { 
            return []; 
        }; 

        const currentUser = await getCurrentUser(); 
        if(!currentUser) { 
            return []; 
        }

        const favouriteMovies = await prismadb.movie.findMany({ 
            where: { 
                id: { 
                    in: currentUser?.favouriteIds, 
                }
            }
        }); 

        return favouriteMovies; 
    } catch(err: any) { 
        console.log(err); 
        return []; 
    }
}; 

export default getFavouriteMovies; 