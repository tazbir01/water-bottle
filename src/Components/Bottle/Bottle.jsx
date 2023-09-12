import './Bottle.css'
function Bottle({bottle, handlePurchase}){
    const {name, img, seller, price} = bottle

    return(
        <div className='bottle'>
            <img className='bottle-image' src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Seller: {seller}</p>
            <p>Price: ${price}</p>
            <button onClick={()=>handlePurchase(bottle)}>Purchase</button>
        </div>
    )
}

export default Bottle;