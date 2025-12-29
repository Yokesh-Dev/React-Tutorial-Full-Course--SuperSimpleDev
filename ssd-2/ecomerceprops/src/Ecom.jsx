import React from 'react'

export const Ecom = ({ product, price, discount, img }) => {

    return (
        <div style={{ border: "5px dashed red", padding: "10px", margin: "10px" }}>
            <img src={img} />
            <h4>{product}</h4>
            <h4>Price: {price}</h4>
            {
                discount && <del>{price}</del>
            }
            {
                discount ? <h4>Discount price:{discount}</h4> : null
            }

            <button>Add to Cart</button>
        </div>
    )
}

export default Ecom