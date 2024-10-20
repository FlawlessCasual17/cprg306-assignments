'use client'
import './styles.css'

export default function Item({ isGrouped, id, name, quantity, category }) {
    const categoryColors = {
        // produce: 'bg-green-200',
        dairy: 'border-gray-400',
        bakery: 'border-orange-200',
        meat: 'border-red-200',
        vegetables: 'border-emerald-200',
        produce: 'border-pink-300',
        'frozen foods': 'border-blue-200',
        'canned goods': 'border-purple-400',
        'dry goods': 'border-emerald-200',
        beverages: 'border-cyan-200',
        snacks: 'border-indigo-200',
        household: 'border-yellow-200',
        other: 'border-slate-200'
    }

    const categoryColor = categoryColors[category.toLowerCase()] || 'bg-slate-200'

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
