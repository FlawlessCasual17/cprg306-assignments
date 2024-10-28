'use client'
import { useState } from 'react'
import Buttons from './buttons'
import SelectCategory from './select-category'
import '../styles.css'

export default function ButtonsWithCategories({ onSubmit }) {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState('')
    const [isInputFilled, setIsInputFilled] = useState(false)
    const [isCategorySelected, setIsCategorySelected] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        const item = {
            name: name,
            quantity: quantity,
            category: category,
        }

        if (item.name && item.category) {
            onSubmit(item)

            // Reset form
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
    )
}
