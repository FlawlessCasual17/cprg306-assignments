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
        if (sortBy === 'name')
            setItems([...items].sort((a, b) => a.name.localeCompare(b.name)))
        else
            setItems([...items].sort((a, b) => a.category.localeCompare(b.category)))
    }

    return (
        <span>
            <div className='flex justify-around'>
                <button onClick={() => sortItems('name')} className='rounding ring-2 ring-gray-300 p-4 mb-2'>
                    Sort by Name
                </button>
                <button onClick={() => sortItems('category')} className='rounding ring-2 ring-gray-300 p-4 mb-2' >
                    Sort by Category
                </button>
            </div>
            <div className=''>
                <ul className='flexbox-list ring-2 bg-slate-900 rounding'>
                    {[...items].map(item => <Item key={item.id} {...item} />)}
                </ul>
            </div>
        </span>
    )
}
