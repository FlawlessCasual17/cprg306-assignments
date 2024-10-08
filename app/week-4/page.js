"use client"
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'

export default function Page() {
    let [count, setCount] = useState(1)

    // count is the current value of the state
    // setCount is a function tha updates the state

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1);

    /*
     *  The nested ternary operation is equivalent to
     *  if (count < 20) count
     *  else if (count > 1) 1
     *  else 20
     */

    return <main className='m-6'>
        <Link href='../'>Go back...</Link>
        <div className='absolute w-1/6 rounded p-5 box text-center justify-center'>
            <h2 className='p-2.5'>
                {count < 20 ? count > 1 ? count : 1 : 20}
            </h2>
            <div className='flex justify-between'>
                <button className='w-1/2 border rounded bg-gray-600' onClick={decrement}>-</button>
                <button className='w-1/2 border rounded bg-blue-600' onClick={increment}>+</button>
            </div>
        </div>
    </main>
}
