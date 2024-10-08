import Link from 'next/link'

export default function Page() {
    return <main className='text-center mt-40'>
        <h1 style={{ color: '#689cf6' }}>
            <div style={{ fontSize: '7rem' }}>
                CPRG <span className='font-mono'>306</span>
            </div>
            Web Development 2 - <span style={{ fontStyle: 'italic' }}>Assignments</span>
        </h1>

        <ul className='m-6' style={{ marginRight: '55rem' }}>
            <li><Link href='week-2'>Week 2</Link></li>
            <li><Link href='week-3'>Week 3</Link></li>
            <li><Link href='week-4'>Week 4</Link></li>
        </ul>
    </main>
}
