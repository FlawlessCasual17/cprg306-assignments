import { useState } from 'react'
import Item from './item'
import jsonItems from './items.json'

export default function ListItem() {
    const [sortBy, setSortBy] = useState('name')
    const [items, setItems] = useState(jsonItems)

    const sortItems = () =>
        setItems([...items].sort((a, b) =>
            sortBy === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
        ))
    // if (sortBy === 'name')
    //     return a.name.localeCompare(b.name)
    // else if (sortBy === 'category')
    //     return a.category.localeCompare(b.category)

    function sortByName() { setSortBy('name'), sortItems() }
    function sortByCategory() { setSortBy('category'), sortItems() }

    return (
        <div>
            <span className='flex justify-around'>
                <button onClick={sortByName} className='rounding ring-2 ring-gray-300 p-4 mb-2 shadow-sm'>
                    Sort by Name
                </button>
                <button onClick={sortByCategory} className='rounding ring-2 ring-gray-300 p-4 mb-2 shadow-sm' >
                    Sort by Category
                </button>
            </span>
            <div className='flex justify-between flex-wrap w-1/2'>
                <ul>{[...items].map(item => <Item key={item.id} {...item} />)}</ul>
            </div>
        </div>
    )
}
