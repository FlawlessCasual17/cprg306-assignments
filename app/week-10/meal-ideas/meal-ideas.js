'use client'
import '../styles.css'
import { useEffect, useState } from 'react'

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([])

    const fetchMealIdeas = async (ingredient) => {
        console.log(`Sending ${ingredient} to the www.themealdb.com`)
        const parameter = `${ingredient}`.replace(' ', '%20')
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${parameter}`
        console.log(`Fetching data from: \n${url}`)

        const response = await fetch(url)
        const data = await response.json()
        const ideas = data.meals || []

        if (Object.keys(ideas).length === 0) {
            console.error('ERROR: Failed to get a proper response from the www.themealdb.com')
            setMeals([])
        } else setMeals(ideas)
    }

    useEffect(() => {
        if (ingredient) fetchMealIdeas(ingredient)
    }, [ingredient])

    return (
        <div className='relative top-9 h-[900px] overflow-y-auto p-4 flex flex-wrap gap-4 content-start justify-center'>
            {meals.map((meal, key) => (
                <li className='meal-item rounded-xl' key={key}>
                    {meal.strMeal}
                    <picture>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width={'100'} />
                    </picture>
                </li>
            ))}
        </div>
    )
}
