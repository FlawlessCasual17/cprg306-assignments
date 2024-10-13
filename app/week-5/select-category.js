import { useState } from 'react'
import './styles.css'

export default function SelectCategory({ category, setCategory, setIsCategorySelected }) {
    const [selectedColor, setSelectedColor] = useState('bg-slate-700')

    const categories = [
        'Produce',
        'Dairy',
        'Bakery',
        'Meat',
        'Frozen Foods',
        'Canned Goods',
        'Dry Goods',
        'Beverages',
        'Snacks',
        'Household',
        'Other',
    ]

    function handleCategoryChange(event) {
        const isEmpty = event.target.value !== ''

        setCategory(event.target.value)
        setSelectedColor(isEmpty ? 'bg-slate-600' : 'bg-slate-700 hover:bg-slate-600')
        setIsCategorySelected(isEmpty)
    }

    return (
        <span className='category-menu rounding' style={{ left: '8.05rem', bottom: '7.5rem' }}>
            <select className={`border-2 border-slate-800 ${selectedColor} p-2 rounding`}
                onChange={(event) => handleCategoryChange(event)}
                value={category}
                required
                aria-label='selectMenu'>
                <option key={0} value='' disabled>Category</option>
                {categories.map((category, index) =>
                    <option key={index} value={category.toLowerCase()}>{category}</option>
                )}
            </select>
        </span>
    )
}
