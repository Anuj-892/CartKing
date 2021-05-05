import React from 'react'

const CartItem =  ({ID, title, image, price,cartItems, setCartItems, isChange, setIsChange}) => {

    const increase = (e) => {
        const input = e.target.parentElement.parentElement.children[0];
        let num = +e.target.parentElement.parentElement.children[0].innerHTML;
        num++
        input.innerHTML = num;
        setIsChange(!isChange);
    }

    const decrease = (e) => {
        const input = e.target.parentElement.parentElement.children[0];
        let num = +e.target.parentElement.parentElement.children[0].innerHTML;
        if(num === 1) {
           return;
        } else {
            num--
            input.innerHTML = num;
            setIsChange(!isChange);
        }       
    }

    return (
        <div className="cart-item" id={ID}>
            <img src={image} alt=""/>
            <div className="info">
                <h3>{title}</h3>
                <p className="price">{price}</p>
                <div className="count">
                    <p>1</p>
                    <div className="btn-group">
                          <button onClick={increase}>&#11014;</button>
                          <button onClick={decrease}>&#11015;</button>
                    </div>
                </div>
                <button id="remove-btn" className={ID} onClick={(e) => setCartItems(cartItems.filter(item => item.ID != e.target.className))}>Remove Item</button>
            </div>
        </div>
    )
}

export default CartItem
