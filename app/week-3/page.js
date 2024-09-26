import Link from "next/link"

export default function Page() {
    return (
        <main className="m-6">
            <Link href="../">Go back... (Shop for more items)</Link>
            <div style={{ marginRight: '10vw', marginTop: '10rem' }}>
                <h1 className="text-center font-serif italic left-header">
                    Shopping List
                </h1>
                <div className="text-lg flex-container">
                    <div className="item">8 Bananas 🍌</div>
                    <div className="item">1 Bread Loaf 🍞</div>
                    <div className="item">2 T-Shirts 👕</div>
                    <div className="item">11 Hammers 🔨</div>
                    <div className="item">1 Political Poster ⚒️</div>
                    <div className="item">Gaming Chair 💺</div>
                </div>
            </div>
            <div className="vertical-line" />
            {/* TODO: Add checkout section on the other side. */}
            <div style={{ marginLeft: '10vw', marginTop: '10rem' }}>
                <h1 className="text-center font-serif italic right-header">
                    Checkout
                </h1>
            </div>
        </main>
    )
}
