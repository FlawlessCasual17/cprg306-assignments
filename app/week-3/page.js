import Link from "next/link"

export default function Page() {
    return (
        <main className="m-6">
            <Link href="../">Go back...</Link>
            <div className="text-center" style={{ marginRight: '40rem', marginTop: '10rem' }}>
                <h1 className="font-serif italic">Shopping List</h1>
                <ul className="mr-80 text-lg">
                    <li className="flexbox">Bananas 🍌</li>
                    <li className="flexbox">Bread 🍞</li>
                </ul>
            </div>
            <div className="vertical-line" />
            {/* TODO: Add checkout section on the other side. */}
        </main>
    )
}
