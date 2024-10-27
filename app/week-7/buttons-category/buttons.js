'use client'
import { useEffect, useState } from 'react'

export default function Buttons({ quantity, setQuantity }) {
    const [isMin, setIsMin] = useState(true)
    const [isMax, setIsMax] = useState(false)

    const MIN = 1, MAX = 100

    useEffect(() => { setIsMin(quantity === MIN), setIsMax(quantity === MAX) }, [quantity])

    const increment = () => setQuantity(quantity < MAX ? quantity + 1 : MAX)
    const decrement = () => setQuantity(quantity > MIN ? quantity - 1 : MIN)

    const buttonClasses = {
        red: 'cursor-not-allowed border-4 bg-red-800 border-red-900 hover:bg-red-700 hover:border-red-800',
        blue: 'border-4 bg-blue-600 border-blue-800 hover:bg-blue-500 hover:border-blue-700',
        gray: 'border-4 bg-gray-700 border-gray-800 hover:bg-gray-500 hover:border-gray-700'
    }

    const getButtonClass = (baseColor, isLimit) => isLimit ? buttonClasses.red : buttonClasses[baseColor]

    const deployButton = (color, isMax, action, symbol) => (
        <button type='button'
            className={getButtonClass(color, isMax)}
            onClick={action}>
            {symbol}
        </button>
    )

    const classes = 'button-box text-center border-2 border-slate-800 bg-slate-600'

    return (
        <span className={classes} style={{ right: '7rem', bottom: '1.5rem' }}>
            <div className='huge-text p-2.5 rounded'>
                {quantity}
            </div>
            <div className='buttons'>
                {deployButton('gray', isMin, decrement, '-')}
                {deployButton('blue', isMax, increment, '+')}
            </div>
        </span>
    )
}
