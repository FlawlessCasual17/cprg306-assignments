'use client'

export default function Item({ id, name, quantity, category }) {
    return (
            <li className='relative w-64 mb-5 ring-2 ring-gray-300 p-4 rounded-xl'>
                <div className='font-semibold text-lg'>
                    {name} <span className='quantity'>× {quantity}</span>
                </div>
                <div className='text-gray-600' style={{ fontSize: '1' }}>{category}</div>
            </li>
    )
}
