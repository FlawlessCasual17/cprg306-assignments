'use client'
import { useState, useEffect } from 'react'

export default function MealIdeas({ anIngredient }) {
    const [meals, setMeals] = useState([])

    const fetchMealIdeas = async (ingredient) => {
        // Clean the ingredient by keeping only ASCII letters
        ingredient = `${ingredient}`
            .replace(/[^\x00-\x7F]/g, '') // Remove non-ASCII characters (including emojis)
            .replace(/[0-9]/g, '')        // Remove numbers
            .replace(/\s+/g, ' ')         // Normalize spaces
            .trim();                      // Remove leading/trailing spaces

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            const data = await response.json()
            const ideas = data.meals || []
            setMeals(ideas)
        } catch (error) {
            console.log(`Error fetching meal ideas: ${error}`)
            setMeals([])
        }
    }

    useEffect(() => {
        if (anIngredient !== null) fetchMealIdeas(anIngredient)
    }, [anIngredient])

    return (
        <ul>
            {meals.map((meal, key) =>
                <li key={key}>
                    {meal.strMeal}
                    <picture><img src={meal.strMealThumb} alt={meal.strMeal} width={'100'} /></picture>
                </li>
            )}
        </ul>
    )
}
