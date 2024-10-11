import './styles.css'
import { useState, useEffect } from 'react'

export default function NewItem({quantity, setQuantity}) {
    const [isMin, setIsMin] = useState(true)
    const [isMax, setIsMax] = useState(false)

    const MIN_COUNT = 1, MAX_COUNT = 20

    useEffect(() => {
        setIsMin(quantity === MIN_COUNT)
        setIsMax(quantity === MAX_COUNT)
        },
        [quantity]
    )

    const increment = () => setQuantity(quantity < MAX_COUNT ? quantity + 1 : MAX_COUNT)
    const decrement = () => setQuantity(quantity > MIN_COUNT ? quantity - 1 : MIN_COUNT)

    const buttonClasses = {
        red: 'border-4 bg-red-800 border-red-900 hover:bg-red-700 hover:border-red-800',
        blue: 'border-4 bg-blue-600 border-blue-800 hover:bg-blue-500 hover:border-blue-700',
        gray: 'border-4 bg-gray-600 border-gray-700 hover:bg-gray-500 hover:border-gray-600'
    }

    const getButtonClass = (baseColor, isLimit) => isLimit ? buttonClasses.red : buttonClasses[baseColor]

    const getButton = (color, isMax, decrement, symbol) =>
        <button
            className={getButtonClass(color, isMax)}
            onClick={decrement}
        >
            {symbol}
        </button>

    return <span>
        <div className='box text-center'>
            <div className='huge p-2.5 rounded'>{ quantity }</div>
            <div className='buttons'>
                {getButton('gray', isMin, decrement, '-')}
                {getButton('blue', isMax, increment, '+')}
            </div>
        </div>
    </span>
}
