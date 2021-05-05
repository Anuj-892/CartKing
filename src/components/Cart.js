import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';

const Cart = ({cartItems, setCartItems}) => {
    const [total, setTotal] = useState(0);
    const [isChange, setIsChange] = useState(false)
    const cartRef = React.createRef(null);

    const checkout = () => {
        setCartItems([]);
        setTimeout(() => {
            alert('Thank You For Shopping At CartKings');
        }, 500);
    }

    useEffect(() => {
        let num = 0;
         let items = cartRef.current.children;
         if(cartItems.length>0) {
             let prefix = items[0].children[1].children[1].innerHTML.slice(0,1);
            for (let i = 0; i < items.length; i++) {
                let price = +items[i].children[1].children[1].innerHTML.slice(1).split(',').join('');
                let count = +items[i].children[1].children[2].children[0].innerHTML;
               num = num + price*count;              
           } 

           let a = num.toString().split('');
           switch (num.toString().length) {
               case 4:
                a.splice(1,0,',');
                   break;

               case 5:
                a.splice(2,0,',');
                   break;

               case 6:
                a.splice(1,0,',');
                a.splice(4,0,',');
                   break;
           
               default:
                   break;
           }
           a = a.join('');
           a=`${prefix}${a}`;
           setTotal(a);
         }
    }, [cartItems, isChange])

    return (
        <section className="cart-list">
           <div className="container">
              <h1>Your Cart</h1>
              <hr/>
              <div className="cart" ref={cartRef}> 
                {
                    cartItems.length>0? cartItems.map(product => (
                        <CartItem isChange={isChange} setIsChange={setIsChange} cartItems={cartItems} setCartItems={setCartItems} key={product.ID} {...product}/>
                    )):<p>Your Cart Is Empty</p>
                }
              </div>
              <hr/>

              {cartItems.length>0 && <p className="total">Total: {total}</p>}
              {cartItems.length>0 && <button className="checkout-btn" onClick={ checkout}>Proceed To Checkout</button>}
           </div>
        </section>
    )
}

export default Cart
