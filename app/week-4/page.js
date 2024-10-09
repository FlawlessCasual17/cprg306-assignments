'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'

export default function Page() {
    let [count, setCount] = useState(1)

    // count is the current value of the state
    // setCount is a function that updates the state

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return <main className='m-6'>
        <Link className='absolute' href='../'>Go back...</Link>
        <div className='box text-center'>
            <div className='huge p-2.5 rounded'>
                {/* If 'count' is greater than 20 or more, the value will be 20. */}
                {/* If the value of 'count' is inclusively between 1 and 19, the value will be itself. */}
                {/* If 'count' is less than 1, the value will be 1. */}
                {count = count < 20 ? (count > 1 ? count : 1) : 20}
            </div>
            <div className='buttons'>
                <button
                    className={ 'border-4 bg-gray-600 border-gray-700 ' +
                        'hover:bg-gray-500 hover:border-gray-600' }
                    onClick={decrement}
                >
                    -
                </button>
                <button
                    className={ 'border-4 bg-blue-600 border-blue-800 ' +
                        'hover:bg-blue-500 hover:border-blue-700' }
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div>
    </main>
}
