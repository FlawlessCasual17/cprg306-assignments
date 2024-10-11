"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import './styles.css'

export default function Page() {
    const [count, setCount] = useState(1)
    const [isMin, setIsMin] = useState(true)
    const [isMax, setIsMax] = useState(false)

    const MIN_COUNT = 1, MAX_COUNT = 20

    useEffect(() => {
        setIsMin(count === MIN_COUNT)
        setIsMax(count === MAX_COUNT)
        },
        [count]
    )

    const increment = () => setCount(count < MAX_COUNT ? count + 1 : MAX_COUNT)
    const decrement = () => setCount(count > MIN_COUNT ? count - 1 : MIN_COUNT)

    const buttonClasses = {
        red: 'border-4 bg-red-800 border-red-900 hover:bg-red-700 hover:border-red-800',
        blue: 'border-4 bg-blue-600 border-blue-800 hover:bg-blue-500 hover:border-blue-700',
        gray: 'border-4 bg-gray-600 border-gray-700 hover:bg-gray-500 hover:border-gray-600'
    }

    const getButtonClass = (baseColor, isLimit) => isLimit ? buttonClasses.red : buttonClasses[baseColor]

    return <main className='m-6'>
        <Link className='absolute' href='../'>Go back...</Link>
        <div className='box text-center'>
            <div className='huge p-2.5 rounded'>
                {count}
            </div>
            <div className='buttons'>
                <button
                    className={getButtonClass('gray', isMin)}
                    onClick={decrement}
                >
                    -
                </button>
                <button
                    className={getButtonClass('blue', isMax)}
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div>
    </main>
}
