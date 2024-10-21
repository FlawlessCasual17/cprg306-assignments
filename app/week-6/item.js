export default function Item({ id, name, quantity, category }) {
    return (
        <li className='relative w-64 mb-5 ring-2 ring-gray-300 p-4 rounded-xl'>
            <div className='font-semibold text-lg'>
                {/* Don't render anything if there's no name, or no quantity */}
                {!name ? null : name} {quantity &&
                    <span className='quantity'>× {quantity}</span>}
            </div>
            {category && // Don't render anything if there's no category
                <div className='text-gray-600' style={{ fontSize: '1rem' }}>{category}</div>
            }
        </li>
    )
}
