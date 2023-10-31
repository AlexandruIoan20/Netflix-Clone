import { NextResponse } from 'next/server';
import prismadb from '../../../libs/prismadb'; 
import bcrypt from 'bcrypt'

export const POST = async (request: Request) => { 
    try { 
        const { name, email, password } = await request.json(); 

        const existingUser = await prismadb.user.findUnique({ 
            where: { 
                email 
            }
        }); 

        if(existingUser) { 
            return new NextResponse("Email Taken", { status: 422 }); 
        }

        const hashedPassword = await bcrypt.hash(password, 12); 
        const user = await prismadb.user.create({ 
            data: { 
                email,
                name, 
                hashedPassword, 
                image: "", 
                emailVerified: new Date ()
            }
        })

        return NextResponse.json(user); 
    } catch(err: any) { 
        console.log(err); 
        return new NextResponse(err, { status: 500 }); 
    }
}