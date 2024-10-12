"use client"
import './styles.css'
import SelectCategory from './select-category'
import Buttons from './buttons'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState('produce')

    function handleSubmit(event) {
        event.preventDefault() // Prevent the default submission behaviour.

        const item = {
            name: name,
            quantity: quantity,
            category: category
        }

        // Log the item
        console.log(item)

        alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`)

        setName(''); setQuantity(0); setCategory('produce')
    }

    return <main className='m-6'>
        <Link className='absolute' href='../'>Go back...</Link>
        <form className='flexbox p-2 bg-slate-900 rounding'>
            <input className='mb-2 w-full mt-1 border-2 border-slate-800 bg-slate-600 p-2 rounding'
                onChange={() => setName} placeholder='Name of Item' required />
            <div className='relative justify-between'>
                <Buttons quantity={quantity} setQuantity={setQuantity} />
                <SelectCategory />
            </div>
        </form>
    </main>
}
