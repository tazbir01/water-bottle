import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"

function Bottles (){
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const handlePurchase =(bottle)=>{
        console.log (bottle)
        const newCart = [...cart, cart]
        setCart(newCart)
    }

    return(
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <h4>Cart:{cart.length}</h4>
            <div className="bottle-container">
                    {
                        bottles.map(bottles => <Bottle 
                            key={bottles.id} 
                            bottle={bottles}
                            handlePurchase={handlePurchase}

                            ></Bottle>)
                    }
            </div>
        </div>
    )
}

export default Bottles;