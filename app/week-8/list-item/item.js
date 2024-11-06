import '../styles.css'

export default function Item({ onItemClick, id, name, quantity, category }) {
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

    return (
        <span key={id} className='aio-flexbox flex-col' onClick={() => onItemClick(name)}>
            <div className={`categories ${categoryColor}`}>{category}</div>
            <li className='li-item rounded-xl hover:bg-zinc-500' >
                <div className='font-bold text-lg'>
                    {name} <div className='quantity'>× {quantity}</div>
                </div>
            </li>
        </span>
    )
}
