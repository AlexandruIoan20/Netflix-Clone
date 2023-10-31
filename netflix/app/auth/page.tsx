'use client'; 

import Input from "../components/inputs/Input"; 
import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react'; 
import { useRouter } from "next/navigation";

const Auth = () => {
    const router = useRouter(); 
    const [ email, setEmail ] = useState<string> (""); 
    const [ name, setName ] = useState <string> (""); 
    const [ password, setPassword ] = useState <string> (""); 

    const [ variant, setVariant ] = useState("login"); 

    const toggleVariant = useCallback( () => { 
        setVariant(currentVariant => currentVariant === 'login' ? 'register' : 'login')
    }, []);

    const login = useCallback(async () => { 
        try { 
            await signIn('credentials', { 
                email, password, 
                redirect: false, 
                callbackUrl: "/"
            }); 

            router.push("/"); 
        } catch(err) { 
            console.log(err); 
        }
    }, [ email, password ]); 

    const register = useCallback( async () => { 
        try { 
            const response = await fetch("/api/register", { 
                method: "POST", 
                mode: "cors", 
                body: JSON.stringify({ 
                    email, name, password, 
                }), 
                headers: { 
                    'Content-Type': "application/json"
                }
            }); 

            login(); 
        } catch(err) { 
            console.log(err); 
        }
    }, [email, name, password, login]); 
    
  return (
    <div className = "relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className = 'bg-black w-full h-full lg:bg-opacity-50'>
            <nav className = 'px-12 py-5'>
                <img src = '/images/logo.png' alt = 'logo' className = 'h-12'/> 
            </nav>
            <div className = 'flex justify-center'>
                <div className = 'bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                    <h2 className = 'text-white text-4xl mb-8 font-semibold'>
                        { variant === 'login' ? 'Sign In' : 'Register' }
                    </h2>
                    <div className = 'flex flex-col gap-4'>
                        { variant === 'register' && (
                            <Input 
                                label = "Username" 
                                onChange =  { (ev: any) => { setName(ev.target.value)}}
                                id = "name"
                                value =  { name }
                            />
                        )}
                        <Input 
                            label = "Email" 
                            onChange =  { (ev: any) => { setEmail(ev.target.value)}}
                            id = "email"
                            type = "email"
                            value =  { email }
                        />

                        <Input 
                            label = "Password"
                            onChange =  { (ev: any) => setPassword(ev.target.value)}
                            id =  "password"
                            value = { password }
                            type = "password"
                        />
                    </div>
                    <button onClick = { variant === 'login' ? login : register } className = {`
                            bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition
                        `}> 
                        { variant === 'login' ? 'Login' : 'Sign Up'} 
                    </button>
                    <p className = 'text-center text-sm text-neutral-500 mt-12'>
                        { variant === 'login' ? 'First time using Netflix? ' : 'Already had an account? '}
                        <span onClick = { toggleVariant } className = 'text-white ml-1 hover:underline cursor-pointer'>
                            { variant === 'login'  ? 'Create an account.' : 'Login'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth