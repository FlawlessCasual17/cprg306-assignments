'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ButtonsWithCategories from '../../week-7/buttons-category/buttons-category'
import ListItem from '../list-item/list-item'
import '../../week-8/styles.css'
import { useUserAuth } from '../_utils/auth-context'

export default function Page() {
    const { user } = useUserAuth()
    const router = useRouter()
    const [items, setItems] = useState([])

    useEffect(() => {
        const isSignedIn = !user

        if (isSignedIn) {
            alert('Please sign in to access the shopping list!')
            router.push('../../week-9')
        }
    }, [user, router])

    const isSignedIn = !user

    if (isSignedIn) return null


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
