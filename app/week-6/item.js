import './styles.css'

export default function Item({ id, name, quantity, category }) {
    return (
        <li key={id} className='relative w-64 mb-5 ring-2 ring-gray-300 p-4 rounding'>
            <div className='font-semibold text-lg'>
                {name} <span className='font-normal text-gray-600' style={{ lineHeight: '0', fontSize: '1rem' }}>
                    × {quantity}
                </span>
            </div>
            <div className='text-gray-600' style={{ fontSize: '1' }}>{category}</div>
        </li>
    )
}
