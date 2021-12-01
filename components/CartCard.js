/* TODO: style me! */
export default function CartCard({ name, img, stock, price}) {
    return <article className="cartcard">
        <div className="everything">
        <div className="img-wrapper">
            <img src={img} alt={name} />
        </div>
        <div className="content">
            <h2 className="plant-name">{name}</h2>
            <p className="price">${price}</p>
        </div>
        </div>
    </article>
}