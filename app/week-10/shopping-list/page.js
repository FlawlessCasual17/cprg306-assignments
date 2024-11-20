'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ButtonsWithCategories from '../../week-7/buttons-category/buttons-category'
import '../../week-8/styles.css'
import { addItem, getItems } from '../_services/shopping-list-service'
import { useUserAuth } from '../_utils/auth-context'
import ListItem from '../list-item/list-item'

export default function Page() {
    const { user } = useUserAuth()
    const router = useRouter()
    const [items, setItems] = useState([])

    const loadItems = async () => { setItems(getItems(user.uid)) }

    useEffect(() => {
        if (!user) {
            alert('Please sign in to access the shopping list!')
            router.push('../../week-9')
        }
    }, [user, router])

    if (!user) return null

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
