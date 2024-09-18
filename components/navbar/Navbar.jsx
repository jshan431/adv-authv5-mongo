import Link from 'next/link'
import Image from "next/image";
import { auth }  from "@/auth";
import Logout from '@/components/auth/Logout';

import { CircleUserRound } from 'lucide-react'

const Navbar = async() => {

  const session = await auth();
  const loggedInUser = session?.user;
  const userName = loggedInUser?.name;

  return (
    <header className="flex justify-between px-5 text-black bg-white">
      <Link href="/">
        <h1 className='text-2xl'>Product App</h1>
      </Link>
      <nav>
        <ul className='flex pt-1'>
          { userName ? (
              <li className='flex'>
                <Link href="/dashboard">
                  {session?.user?.image ? 
                    <Image 
                      src={session?.user?.image}
                      alt={session?.user?.name}
                      width={25}
                      height={25}
                      className='rounded-full' />
                    :
                    <CircleUserRound /> 
                  }
                </Link>
                <span className='mx-1'> | </span>
                <Logout />
              </li>
            ) : (
              <>
                <li className='mx-2'>
                  <Link href="/auth/login">Login</Link>
                </li>
                <li className='mx-2'>
                  <Link href="/auth/register">Register</Link>
                </li>
              </>
            )
          
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar