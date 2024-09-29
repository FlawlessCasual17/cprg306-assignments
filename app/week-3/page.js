import Link from 'next/link'
import ListItem from './listItem'

export default function Page() {
    return (
        <main className='m-6'>
            <Link href='../'>Go back... (Shop for more items)</Link>
            {/* Checkout Section */}
            <div style={{ marginLeft: '10vw', marginTop: '10rem' }}>
                <h1 className='text-center font-serif italic right-header'>
                    Checkout
                </h1>
                <form className='form' action='../' method='post'>
                    <label for='firstName'>First Name</label>
                    <input type='text' id='firstName' name='firstName' required />
                    <label for='lastName'>Last Name</label>
                    <input type='text' id='lastName' name='lastName' required />
                    <label for='email'>Email</label>
                    <input type='email' id='email' name='email' required />
                    <label for='password'>Password</label>
                    <input type='password' id='password' name='cardNumber' required />
                    <label for='cardNumber'>Card Number</label>
                    <input type='password' id='cardNumber' name='cardNumber' required />
                    <label for='expiryDate'>Card Expiry Date</label>
                    <input type='date' id='expiryDate' name='expiryDate' required />
                    <label for='cvv'>CVV</label>
                    <input type='password' id='cvv' name='cvv' required />
                    <label for='postalCode'>Postal/ZIP Code</label>
                    <input type='text' id='postalCode' name='postalCode' required />
                    <button type='submit'>Submit Payment</button>
                </form>
            </div>
            <div className='vertical-line' />
            {/* Shopping List */}
            <div style={{ marginRight: '10vw', marginTop: '10rem' }}>
                <h1 className='text-center font-serif italic left-header'>
                    Shopping List
                </h1>
                <div className='text-lg shopping-list'>
                    <ListItem item={'8 Bananas 🍌'} price={1.20} />
                    <ListItem item={'1 Loaf of Sourdough Bread 🍞'} price={5.50} />
                    <ListItem item={'2 T-Shirts 👕'} price={15.00} />
                    <ListItem item={'1 Hammer 🔨'} price={4.00} />
                    <ListItem item={'1 Political Poster ⚒️'} price={10.00} />
                    <ListItem item={'Gaming Chair 💺'} price={150.00} />
                    <ListItem item={'1 Large Bag of Frozen Blueberries 🫐'} price={5.00} />
                    <ListItem item={'1 Pack of Yogurt 📦🍨'} price={11.00} />
                </div>
            </div>
        </main>
    )
}
