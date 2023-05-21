import Navbar from './navbar'
import {getServerSession} from 'next-auth/next'
import {authOptions} from '@/app/api/auth/[..nextauth]/route'

export default async function Nav() {
    'use server'
    const session = await getServerSession(authOptions)
    return <Navbar session={session} />
}
