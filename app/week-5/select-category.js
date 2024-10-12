import './styles.css'

export default function SelectCategory() {
    const categories = [
        'Produce', 'Dairy', 'Bakery', 'Meat', 'Frozen Foods',
        'Canned Goods', 'Dry Goods', 'Beverages', 'Snacks',
        'Household', 'Other'
    ]

    return <span className='category-menu rounding' style={{ left: '8.05rem', bottom: '7.5rem' }}>
        <select className='border-2 border-slate-800 bg-slate-600 p-2 rounding'>
            <option key={0} value='' disabled=''>Category</option>
            {categories.map((category, index) =>
                <option key={index++} value={category.toLowerCase()}>{category}</option>)
        }
        </select>
    </span>
}
