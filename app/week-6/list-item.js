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
            </div>
            <div className='relative'>
                {/* {[...items].map((item, id) => (<div key={id}>{item.category}</div>))} */}
                <ul className='flexbox-list rounded-xl align-text-bottom'>
                    {[...items].map(item => (<Item key={item.id} {...item} />))}
                </ul>
            </div>
        </span>
    )
}
