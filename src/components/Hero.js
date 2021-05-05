import React, { useContext } from 'react'
import productContext from '../context'

const Hero = ({setId}) => {

    const products = useContext(productContext);

    const handleClick = (e) => {
        setId(e.target.parentElement.id);
    }

    return (
        <section className="product-grid">
            <div className="container">
                {
                    products.map(product => (
                        <div key={product.ID} id={product.ID} className="product">
                            <img src={product.image} alt=""/>
                            <h4>{product.title}</h4>
                            <p>{product.price}</p>
                            <button onClick={handleClick}>Add To Cart</button>
                        </div>
                    ))
                }   
            </div>
        </section>
    )
}

export default Hero
