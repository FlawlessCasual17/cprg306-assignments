'use client'
import './styles.css'

export default function Item({ isGrouped, id, name, quantity, category }) {
    const capitalFirst = (str) => `${str}`.split(' ').map(c =>
        c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()).join(' ')

    const categoryTitle = (
        <div className={`category ${isGrouped ?  '' : 'category-active'}`}>
            {capitalFirst(category)}
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
