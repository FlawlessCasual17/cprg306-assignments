import Link from "next/link"

export default function Page() {
    return (
        <main className="m-6">
            <Link href="../">Go back... (Shop for more items)</Link>
            {/* Checkout Section */}
            <div style={{ marginLeft: '10vw', marginTop: '10rem' }}>
                <h1 className="text-center font-serif italic right-header">
                    Checkout
                </h1>
                <form className="form" action="/submit" method="post">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="vertical-line" />
            {/* Shopping List */}
            <div style={{ marginRight: '10vw', marginTop: '10rem' }}>
                <h1 className="text-center font-serif italic left-header">
                    Shopping List
                </h1>
                <div className="text-lg shopping-list">
                    <div>8 Bananas 🍌</div>
                    <div>1 Bread Loaf 🍞</div>
                    <div>2 T-Shirts 👕</div>
                    <div>11 Hammers 🔨</div>
                    <div>1 Political Poster ⚒️</div>
                    <div>Gaming Chair 💺</div>
                    <div>1 Large Bag of Frozen Blueberries 🫐</div>
                </div>
            </div>
        </main>
    )
}
