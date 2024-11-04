'use client'
import { useState, useEffect } from 'react'

export default function MealIdeas() {
    const [meals, setMeals] = useState([])

    const fetchMealIdeas = async (ingredient) => {
        // Clean the ingredient by keeping only ASCII letters
        ingredient = `${ingredient}`
            .replace(/[^\x00-\x7F]/g, '') // Remove non-ASCII characters (including emojis)
            .replace(/[0-9]/g, '')        // Remove numbers
            .replace(/\s+/g, ' ')         // Normalize spaces
            .trim();                      // Remove leading/trailing spaces

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        const ideas = Object.keys(response.json().meals)
        setMeals(ideas)
    }

    useEffect((ingredient) => { fetchMealIdeas(ingredient) }, [])

    return (
        <div>
            {/* TODO: Do some mapping stuff here... */}
            {meals.map}
        </div>
    )
}
