'use client'
import './styles.css'
import { useState } from 'react'
import Item from './item'
import jsonItems from './items.json'

export default function ListItem() {
    const [sortBy, setSortBy] = useState('name')
    const sortedJson = [...jsonItems].sort((a, b) => a.name.localeCompare(b.name))
    const [items, setItems] = useState(sortedJson)

    function sortByName() {
        setSortBy('name')
        setItems([...items].sort((a, b) => a.name.localeCompare(b.name)))
    }

    function sortByCategory() {
        setSortBy('category')
        setItems([...items].sort((a, b) => a.category.localeCompare(b.category)))
    }

    function groupByCategory() {
        sortByCategory() // Sort everything by category first.
    }

    console.log(`sortBy is now equal to: ${sortBy}`)

    function getClasses(buttonType) {
        const baseClasses = 'flex-buttons rounding ring-2 ring-slate-600 hover:ring-slate-500'
        return sortBy === buttonType ? `${baseClasses} flex-buttons-active ring-slate-500` : baseClasses
    }

    return (
        <span>
            <div className='flex justify-around'>
                <button onClick={sortByName} className={getClasses('name')}>
                    Sort by Name
                </button>
                <button onClick={sortByCategory} className={getClasses('category')}>
                    Sort by Category
                </button>
                <button onClick={groupByCategory} className={getClasses()}>
                    Group by Category
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
