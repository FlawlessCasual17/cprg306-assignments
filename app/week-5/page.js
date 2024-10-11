"use client"
import './styles.css'
import NewItem from './new-item'
import Link from 'next/link'
import { useState } from 'react'

function handleSubmit(name, quantity, category) {
    const item = {
        name: name,
        quantity: quantity,
        category: category
    }

    console.log(item)

    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`)
}

export default function Page() {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState('produce')

    return <main className='m-6'>
        <Link className='absolute' href='../'>Go back...</Link>
        <form className='p-2 m-4 bg-slate-900 max-w-sm w-full'>
            <div className='mb-2'>
                <input className='class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg'
                    placeholder='Name of Item' required />
            </div>
            <NewItem quantity={quantity} setQuantity={setQuantity} />
        </form>
    </main>
}
