'use client'
import './styles.css'
import Link from 'next/link'
import ListItem from './list-item'

export default function Page() {
    return (
        <main className='m-6'>
            {/* dprint-ignore */}
            <Link href='../'>Go back...</Link>
            <h1>Shopping List</h1>
            <ListItem />
        </main>
    )
}
