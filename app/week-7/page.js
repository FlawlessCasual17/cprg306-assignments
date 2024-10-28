'use client'
import { useState } from 'react'
import Link from 'next/link'
import ButtonsWithCategories from './buttons-category/buttons-category'
import ListItem from './list-item/list-item'
import './styles.css'

export default function Page() {
    const [items, setItems] = useState([])

    const handleAddItem = (newItem) => {
        setItems([...items, { ...newItem, id: items.length + 1 }])
    }

    return (
        <main className='m-6'>
            <Link href='../'>Go back...</Link>
            <h2>Shopping List</h2>
            <ButtonsWithCategories onSubmit={handleAddItem} />
            <ListItem initialItems={items} />
        </main>
    )
}
