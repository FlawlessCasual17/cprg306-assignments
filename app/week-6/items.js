import './styles.css'

export default function Item({ id, name, quantity, price }) {
    return ( // dprint-ignore
        <li key={id} className='ring-2 ring-gray-300 p-4 mb-2 rounding bg-white shadow-sm'>
            <div className='font-semibold text-lg'>{name}</div>
            <div className='text-gray-600'>Quantity: {quantity}</div>
            <div className='text-gray-600'>Category: {category}</div>
        </li>
    )
}
