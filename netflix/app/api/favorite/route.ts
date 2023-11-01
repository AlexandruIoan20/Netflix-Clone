import { NextResponse } from "next/server";
import prismadb from '../../../libs/prismadb';
import getCurrentUser from "@/app/actions/getCurrentUser";
import { without } from "lodash";

export const POST = async (request: Request) => { 
    try { 
        const { movieId } = await request.json(); 
        const currentUser = await getCurrentUser(); 

        const existingMovie = await prismadb.movie.findUnique({ 
            where: { 
                id: movieId
            }
        }); 

        if(!existingMovie) { 
            return new NextResponse('Not found', { status: 404 }); 
        }

        const updatedUser = await prismadb.user.update({ 
            where: { 
                id: currentUser?.id, 
            }, data: { 
                favouriteIds: { 
                    push: movieId, 
                }
            }
        }); 

        return NextResponse.json(updatedUser); 
    } catch(err: any) { 
        console.log(err); 
        return new NextResponse(err, { status: 500 }); 
    }
}

export const DELETE = async (request: Request) => { 
    try { 
        const { movieId } = await request.json(); 
        const currentUser = await getCurrentUser(); 

        const existingMovie = await prismadb.movie.findUnique({ 
            where: { 
                id: movieId
            }
        }); 

        if(!existingMovie) { 
            return new NextResponse('Not found', { status: 404 }); 
        }

        const updateFavoriteIds = without(currentUser?.favouriteIds, movieId); 
        const updatedUser = await prismadb.user.update({ 
            where: { 
                id: currentUser?.id, 
            }, data: { 
                favouriteIds: updateFavoriteIds, 
            }
        }); 

        return NextResponse.json(updatedUser); 
    } catch(err: any) { 
        console.log(err); 
        return new NextResponse(err, { status: 500 }); 
    }
}