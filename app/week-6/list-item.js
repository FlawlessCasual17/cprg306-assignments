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

    function getSortedItems() {
        const groupedItems = items.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = []
            acc[item.category].push(item)
            return acc
        }, {})

        return Object.keys(groupedItems).sort().flatMap(category =>
            [{ category, grouped: !isGrouped }, ...groupedItems[category].sort((a, b) =>
                a.name.localeCompare(b.name))])
    }

    // const categoryColors = {
    //     dairy: 'border-cyan-300',
    //     bakery: 'border-pink-500',
    //     meat: 'border-red-400',
    //     produce: 'border-emerald-400',
    //     'canned goods': 'border-amber-400',
    //     'dry goods': 'border-orange-400',
    //     household: 'border-blue-500'
    // }

    // const categoryColor = categoryColors[`${category}`.toLowerCase()] || 'bg-slate-200'

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
            <div className='aio-flexbox'>
                {getSortedItems().map((item, id) => {
                    return item.grouped ? (
                        <div key={id} className={`category ${isGrouped ? '' : 'category-active'}`}>
                            {item.category}
                        </div>
                    ) : (
                        <ul key={id} className='flexbox-list rounded-xl align-text-bottom'>
                            <Item {...item} />
                        </ul>
                    )
                })}
                {/* <div className={`category ${isGrouped ? '' : 'category-active'} ${categoryColor}`}>
                    {category}
                </div>
                <ul className='flexbox-list rounded-xl align-text-bottom'>
                    {[...items].map(item => <Item key={item.id} {...item} />)}
                </ul>
                */}
            </div>
        </span>
    )
}
