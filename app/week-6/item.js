import './styles.css'

export default function Item({ isGrouped, id, name, quantity, category }) {
    const capitalFirst = (str) => str.split(' ').map(c =>
        `${c.charAt(0).toUpperCase()}${c.slice(1).toLowerCase()}`).join(' ')

    return (
        <span key={id} className='relative flex justify-around flex-wrap flex-row'>
            <div className='relative font-extrabold text-lg' hidden={isGrouped}>
                {capitalFirst(category)}
            </div>
            <li className='relative w-64 mb-5 ring-2 ring-gray-300 p-4 rounding'>
                <div className='font-semibold text-lg'>
                    {name} <span className='quantity'>× {quantity}</span>
                </div>
                <div className='text-gray-600' style={{ fontSize: '1' }}>{category}</div>
            </li>
        </span>
    )
}
