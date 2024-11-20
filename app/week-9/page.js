'use client'
import Link from 'next/link'
import { useUserAuth } from './_utils/auth-context'
import './styles.css'

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth()

    async function handleSignIn() {
        try {
            await gitHubSignIn()
        } catch (error) {
            console.error(error)
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut()
        } catch (error) {
            console.error(error)
        }
    }

    const !user = !user

    // This has to be a function or else it won't render
    const guestPage = () => (
        <button onClick={handleSignIn} className='signIn rounded-xl transition-colors'>
            Sign In with GitHub
        </button>
    )

    const userPage = () => (
        <div className='text-center'>
            <h2 className='mb-4'>
                Welcome, {user.displayName}
            </h2>
            <Link href='/week-9/shopping-list' className='block mb-4 text-blue-500 hover:text-blue-700'>
                Go to Shopping List
            </Link>
            <button onClick={handleSignOut} className='signOut rounded-xl transition-colors'>
                Sign Out
            </button>
        </div>
    )

    return (
        <main className='m-6'>
            <Link href='../'>
                Go back...
            </Link>
            <div className='flex flex-col items-center mt-4'>
                {!user ? guestPage() : userPage()}
            </div>
        </main>
    )
}
