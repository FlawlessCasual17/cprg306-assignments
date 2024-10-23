'use client'
import './styles.css'
import Link from 'next/link'
import ListItem from './list-item'
import ButtonsWithCategories from './buttons-category'

export default function Page() {
    return (
        <main className='m-6'>
            {/* dprint-ignore */}
            <Link href='../'>Go back...</Link>
            <h2>Shopping List</h2>
            <ButtonsWithCategories />
            <ListItem />
        </main>
    )
}
