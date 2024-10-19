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
        const baseClasses = 'flex-buttons rounding'
        return sortBy === buttonType ? `${baseClasses} flex-buttons-active` : baseClasses
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
            <div className='relative'>
                <ul className='flexbox-list rounding'>
                    {[...items].map(item => <Item key={item.id} {...item} />)}
                </ul>
            </div>
        </span>
    )
}
