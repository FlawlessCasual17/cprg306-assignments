'use client'
import './styles.css'

export default function Item({ isGrouped, id, name, quantity, category }) {
    const categoryColors = {
        dairy: 'border-cyan-300',
        bakery: 'border-pink-500',
        meat: 'border-red-400',
        produce: 'border-emerald-400',
        'canned goods': 'border-amber-400',
        'dry goods': 'border-orange-400',
        household: 'border-blue-500'
    }

    const categoryColor = categoryColors[`${category}`.toLowerCase()] || 'bg-slate-200'

    const categoryTitle = (
        <div className={`category ${isGrouped ?  '' : 'category-active'} ${categoryColor}`}>
            {category}
        </div>
    )

    return (
        <span key={id} className='aio-flexbox'>
            {categoryTitle}
            <li className='relative w-64 mb-5 ring-2 ring-gray-300 p-4 rounded-xl'>
                <div className='font-semibold text-lg'>
                    {name} <span className='quantity'>× {quantity}</span>
                </div>
                <div className='text-gray-600' style={{ fontSize: '1' }}>{category}</div>
            </li>
        </span>
    )
}
