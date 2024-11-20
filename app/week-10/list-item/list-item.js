'use client'
import { useEffect, useState } from 'react'
import MealIdeas from '../meal-ideas/meal-ideas'
import '../styles.css'
import Item from './item'
import jsonItems from './items.json'

export default function ListItem({ initialItems }) {
    const [sortBy, setSortBy] = useState('name')
    const [items, setItems] = useState([...jsonItems, ...initialItems])
    const [selectedIngredient, setSelectedIngredient] = useState('')

    const handleItemClick = (ingredient) => {
        // Clean the ingredient name - remove emojis, numbers, and extra spaces
        const cleanIngredient = `${ingredient}`.replace(/[^\x00-\x7F]/g, '').replace(/[0-9]/g, '').replace(/\s+/g, ' ')
            .replace(/,.*$/, '').trim()

        setSelectedIngredient(cleanIngredient)
    }

    useEffect(() => {
        setItems([...jsonItems, ...initialItems])
    }, [initialItems])

    function sortByName() {
        setSortBy('name')
        setItems([...items].sort((a, b) => a.name.localeCompare(b.name)))
    }

    function sortByCategory() {
        setSortBy('category')
        setItems([...items].sort((a, b) => a.category.localeCompare(b.category)))
    }

    // console.log(`sortBy is now equal to: ${sortBy}`)

    const getClasses = (type) => `flex-buttons rounded-xl ${sortBy === type && 'flex-buttons-active'}`

    return (
        <div>
            <div className='flex justify-center button-container relative'>
                <button onClick={sortByName} className={getClasses('name')}>
                    Sort by Name
                </button>
                <button onClick={sortByCategory} className={getClasses('category')}>
                    Sort by Category
                </button>
            </div>
            <div className='flex'>
                <div className='w-1/2'>
                    <ul className='flexbox-list flex-row rounded-xl align-text-bottom'>
                        {[...items].map(item => <Item key={item.id} onItemClick={handleItemClick} {...item} />)}
                    </ul>
                </div>
                <ul className='flexbox-list w-1/2 rounded-xl p-4 align-text-bottom'>
                    <h2 className='absolute text-xl font-bold mb-4'>
                        Meal Ideas
                    </h2>
                    <MealIdeas ingredient={selectedIngredient} />
                </ul>
            </div>
        </div>
    )
}
