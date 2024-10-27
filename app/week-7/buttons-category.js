'use client'
import './styles.css'
import { useState } from 'react'
import Buttons from './buttons'
import SelectCategory from './select-category'

export default function ButtonsWithCategories() {
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
            alert(`Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`)

            // Reset the state variables
            setQuantity(1)
            Array.of(setName, setCategory).forEach(set => set(''))
            Array.of(setIsInputFilled, setIsCategorySelected).forEach(set => set(false))
        } else alert('Please fill in all fields!')
    }

    const areFieldsFilled = !isInputFilled || !isCategorySelected

    const submitButton = () => (
        <button type='submit'
            className={areFieldsFilled ? 'disallowed rounding' : 'submit-button rounding'}
            onClick={(event) => handleSubmit(event)}
            disabled={areFieldsFilled}>
            Add Item
        </button>
    )

    return (
        <div>
            {/* dprint-ignore */}
            <form className='flexbox p-2 bg-slate-900 rounding'>
                <input className='mb-2 w-full mt-1 border-2 border-slate-800 bg-slate-600 p-2 rounding'
                    onChange={(event) => { setName(event.target.value), setIsInputFilled(event.target.value.trim() !== '') }}
                    placeholder='Name of Item'
                    required
                    value={name} />
                <div className='relative justify-between'>
                    <Buttons quantity={quantity} setQuantity={setQuantity} />
                    <SelectCategory category={category} setCategory={setCategory}
                        setIsCategorySelected={setIsCategorySelected} />
                </div>
                <div className='flex relative' style={{ bottom: '7.5rem' }}>
                    {submitButton()}
                </div>
            </form>
        </div>
    )
}
