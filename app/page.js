import Link from 'next/link'

export default function Page() {
    const titlePart = (<span className='font-mono'>306</span>)
    const subtitlePart = (<span className='italic'>Assignments</span>)

    return (
        <main className='text-center mt-40'>
            <h1 style={{ color: '#689cf6' }}>
                <div style={{ fontSize: '7rem' }}>
                    CPRG {titlePart}
                </div>
                Web Development 2 - {subtitlePart}
            </h1>

            {/* dprint-ignore */}
            <ul className='m-6' style={{ marginRight: '55rem' }}>
                <li><Link href='week-2'>Week 2</Link></li>
                <li><Link href='week-3'>Week 3</Link></li>
                <li><Link href='week-4'>Week 4</Link></li>
                <li><Link href='week-5'>Week 5</Link></li>
                <li><Link href='week-6'>Week 6</Link></li>
                {/* <li><Link href='week-7'>Week-7</Link></li> */}
            </ul>
        </main>
    )
}
