import './styles.css'

export default function Item({ id, name, quantity, category }) {
    return (
        <li className='ring-2 ring-gray-300 p-4 mb-2 rounding shadow-sm'>
            <div className='font-semibold text-lg'>
                {name} <span className='font-normal text-gray-600' style={{ lineHeight: '0', fontSize: '1rem' }}>
                    × {quantity}
                </span>
            </div>
            <div className='text-gray-600' style={{ fontSize: '1' }}>{category}</div>
        </li>
    )
}
