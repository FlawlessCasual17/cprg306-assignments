'use client'
import './styles.css'
import { useState } from 'react'
import Item from './item'
import jsonItems from './items.json'

export default function ListItem() {
    const [sortBy, setSortBy] = useState('name')
    const sortedJson = [...jsonItems].sort((a, b) => a.name.localeCompare(b.name))
    const [items, setItems] = useState(sortedJson)
    const [isGrouped, setIsGrouped] = useState(true)

    function sortByName() {
        setIsGrouped(true)
        setSortBy('name')
        setItems([...items].sort((a, b) => a.name.localeCompare(b.name)))
    }

    function sortByCategory(value = false) {
        setIsGrouped(true)
        if (value) setSortBy('category') // Necessary for `groupByCategory()` calls
        setItems([...items].sort((a, b) => a.category.localeCompare(b.category)))
    }

    function groupByCategory() {
        sortByCategory(true)
        setSortBy('group')
        // code to be executed after 50 milliseconds
        setTimeout(() => setIsGrouped(false), 50);
    }

    console.log(`sortBy is now equal to: ${sortBy}`)

    const getClasses = (type) =>
        `flex-buttons rounded-xl ${sortBy === type ? 'flex-buttons-active' : ''}`

    return (
        <span>
            <div className='flex justify-center button-container relative'>
                <button onClick={sortByName} className={getClasses('name')}>
                    Sort by Name
                </button>
                <button onClick={sortByCategory} className={getClasses('category')}>
                    Sort by Category
                </button>
                <button onClick={groupByCategory} className={getClasses('group')}>
                    Group by Category
                </button>
            </div>
            <div className='relative'>
                <ul className='flexbox-list rounded-xl align-text-bottom'>
                    {[...items].map(item =>
                        <Item key={item.id} isGrouped={isGrouped} {...item} />)}
                </ul>
            </div>
        </span>
    )
}
