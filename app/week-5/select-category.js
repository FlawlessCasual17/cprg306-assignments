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
        setCategory(event.target.value)
        setSelectedColor(event.target.value !== '' ? 'bg-slate-600' : 'bg-slate-700 hover:bg-slate-600')
        setIsCategorySelected(event.target.value !== '')
    }

    return (
        <span className='category-menu rounding' style={{ left: '8.05rem', bottom: '7.5rem' }}>
            <select
                className={`border-2 border-slate-800 ${selectedColor} p-2 rounding`}
                onChange={(e) => handleCategoryChange(e)}
                value={category}
                required>
                <option key={0} value='' disabled>Category</option>
                {categories.map((category, index) =>
                    <option key={index} value={category.toLowerCase()}>{category}</option>
                )}
            </select>
        </span>
    )
}
