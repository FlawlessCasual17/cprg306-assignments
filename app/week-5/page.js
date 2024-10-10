"use client"
import './styles.css'
import Link from 'next/link'
import NewItem from './new-item'

export default function Page() {
    return <main>
        <Link className='absolute' href='../'>Go back...</Link>
        <NewItem />
    </main>
}
