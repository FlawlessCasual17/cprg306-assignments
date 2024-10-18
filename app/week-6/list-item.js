import { useState } from 'react'
import Item from './item'
import jsonItems from './items.json'

export default function ListItem() {
    const [sortBy, setSortBy] = useState('name')
    const [items, setItems] = useState(jsonItems)
    const [groupByCategory, setGroupByCategory] = useState(false)

    const sortItems = () =>
        setItems([...items].sort((a, b) =>
            sortBy === 'name' ?
                a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
        ))
    // if (sortBy === 'name')
    //     return a.name.localeCompare(b.name)
    // else if (sortBy === 'category')
    //     return a.category.localeCompare(b.category)

    function sortByName() { setSortBy('name'); sortItems() }
    function sortByCategory() { setSortBy('category'); sortItems() }

    function handleGroupByCategory() {
        setGroupByCategory(true)
        const groupedItems = [...items].reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = []
            acc[item.category].push(item)
            return acc
        })
        // if (!acc[item.category]) acc[item.category] = []
        // acc[item.category].push(item)

        Object.keys(groupedItems).sort().forEach(category =>
            [...groupedItems[category]].sort((a, b) => a.name.localeCompare(b.name))
        )

        setItems(groupedItems)
    }

    function renderItems() {
        if (groupByCategory)
            return Object.entries(items).map(([category, categoryItems]) =>
                <div key={category}>
                    <h2 className='text-xl font-bold mt-4 capitalize'>{category}</h2>
                    <ul>{[categoryItems].map(item => <Item key={item.id} {...item} />)}</ul>
                </div>
            )

        return <ul>{items.map(item => <Item key={item.id} {...item} />)}</ul>
    }

    return (
        <div>
            <span className='flex justify-around'>
                <button onClick={sortByName} className='rounding ring-2 ring-gray-300'>
                    Sort by Name
                </button>
                <button onClick={sortByCategory} className='rounding ring-2 ring-gray-300' >
                    Sort by Category
                </button>
                <button onClick={handleGroupByCategory} className='rounding ring-2 ring-gray-300'>
                    Group by Category
                </button>
            </span>
            {renderItems()}
        </div>
    )


}
