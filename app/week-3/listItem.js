export default function ListItem({item, price}) {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price)

    return (
        <div>
            {item}
            <div>
                {formattedPrice}
            </div>
        </div>
    )
}
