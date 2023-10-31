import prismadb from '../../libs/prismadb'; 
import getSession from './getSession';

const getCurrentUser = async () => { 
    try{ 
        const session = await getSession(); 

        if(!session?.user?.email) { 
            return null; 
        }

        const currentUser = await prismadb.user.findUnique({ 
            where: { 
                email: session?.user?.email, 
            }
        }); 

        return currentUser; 
    } catch(err: any) { 
        console.log(err); 
        return null; 
    }
}