'use client'
import './styles.css'
import { useState } from 'react'
import Item from './item'
import jsonItems from './items.json'

export default function ListItem() {
    const [sortBy, setSortBy] = useState('name')
    const sortedJson = [...jsonItems].sort((a, b) => a.name.localeCompare(b.name))
    const [items, setItems] = useState(sortedJson)

    function sortItems(type) {
        setSortBy(type)
        if (type === 'name')
            setItems([...items].sort((a, b) => a.name.localeCompare(b.name)))
        else
            setItems([...items].sort((a, b) => a.category.localeCompare(b.category)))
    }

    return (
        <div>
            <span className='flex justify-around'>
                <button onClick={() => sortItems('name')} className='rounding ring-2 ring-gray-300 p-4 mb-2 shadow-sm'>
                    Sort by Name
                </button>
                <button onClick={() => sortItems('category')} className='rounding ring-2 ring-gray-300 p-4 mb-2 shadow-sm' >
                    Sort by Category
                </button>
            </span>
            <div className='flex justify-between flex-wrap w-1/2'>
                <ul>{[...items].map(item => <Item key={item.id} {...item} />)}</ul>
            </div>
        </div>
    )
}
