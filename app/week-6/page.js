'use client'
import Link from 'next/link'
import ListItem from './list-item'

export default function Page() {
    return (
        <main className='m-6'>
            {/* dprint-ignore */}
            <Link href='../'>Go back...</Link>
            <h1 className='text-2xl font-bold mb-4 text-center'>Shopping List</h1>
            <ListItem />
        </main>
    )
}
