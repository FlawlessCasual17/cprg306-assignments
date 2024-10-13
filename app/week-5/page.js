'use client'
import './styles.css'
import Link from 'next/link'
import { useState } from 'react'
import Buttons from './buttons'
import SelectCategory from './select-category'

export default function Page() {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState('')
    const [isInputFilled, setIsInputFilled] = useState(false)
    const [isCategorySelected, setIsCategorySelected] = useState(false)

    function handleSubmit(event) {
        event.preventDefault() // Prevent the default submission behaviour.

        const item = { // Create an item object
            name: name,
            quantity: quantity,
            category: category,
        }

        if (item.name && item.category) {
            // Log the item
            console.log(item)

            // Alert the user
            alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`)

            // Reset the value of name, quantity, and category
            Array.of(setName, setCategory).forEach(set => set(''))
            setQuantity(1)
        } else alert('Please fill in all fields')
    }

    const areFieldsFilled = !(isInputFilled || isCategorySelected)

    const submitButton = () => (
        <button type='submit'
            className={areFieldsFilled ? 'disallowed rounding' : 'submit-button rounding'}
            onClick={(event) => handleSubmit(event)}
            disabled={areFieldsFilled}>
            Add Item
        </button>
    )

    return (
        <main className='m-6'>
            {/* dprint-ignore */}
            <Link className='absolute' href='../'>Go back...</Link>
            <form className='flexbox p-2 bg-slate-900 rounding'>
                <input
                    className='mb-2 w-full mt-1 border-2 border-slate-800 bg-slate-600 p-2 rounding'
                    onChange={(e) => {
                        setName(e.target.value)
                        setIsInputFilled(e.target.value.trim() !== '')
                    }}
                    placeholder='Name of Item'
                    required />
                <div className='relative justify-between'>
                    <Buttons quantity={quantity} setQuantity={setQuantity} />
                    <SelectCategory category={category} setCategory={setCategory}
                        setIsCategorySelected={setIsCategorySelected} />
                </div>
                <div className='flex relative' style={{ bottom: '7.5rem' }}>
                    {submitButton()}
                </div>
            </form>
        </main>
    )
}
