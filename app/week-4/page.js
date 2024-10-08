"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
    let [count, setCount] = useState(0)

    // count is the current value of the state
    // setCount is a function tha updates the state

    const increment = () => setCount(count + 1)

    return <main>
        <Link href='../'>Go back...</Link>
        <p>counter: {count}</p>
        <button onClick={increment}>Increment</button>
    </main>
}
