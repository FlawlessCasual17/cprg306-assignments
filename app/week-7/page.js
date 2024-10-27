'use client'
import Link from 'next/link'
import ButtonsWithCategories from './buttons-category'
import ListItem from './list-item'
import './styles.css'

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
