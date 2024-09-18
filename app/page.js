import Link from "next/link"

export default function Page() {
    return <main style={{ marginLeft: '30rem', marginTop: '10rem' }}>
        <h1 style={{ color: '#68f6c7' }}>
            Web Dev 2 <span style={{ fontStyle: 'italic' }}>Assignments</span>
        </h1>

        <ul className="m-6">
            <li><Link href="week-2">Week 2</Link></li>
            {/* <li>
                <Link href="week-3">Week 3</Link>
            </li> */}
        </ul>
    </main>
}
