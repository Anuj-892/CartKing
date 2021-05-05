import Header from "./components/Header";
import { Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import Cart from "./components/Cart";
import { useState, useEffect, useContext } from "react";
import productContext from './context'

function App() {
 const products = useContext(productContext);
  const [cartItems, setCartItems] = useState([])
  const [id, setId] = useState('')

  useEffect(() => {
     if(id == '') {
       return;
     } else {
          products.forEach(product => {
               if(product.ID == id) {
                   if(cartItems.some(item => item.ID == id)) {
                    return;
                   } else {
                    setCartItems(cartItems => [...cartItems, product])
                   }
               }
           })
     }
  }, [id])

  useEffect(() => {
     setId('');
  }, [cartItems])

  return (
    <div className="App">
         <Header cartItems={cartItems}/>
         <main>
          <Switch>
              <Route exact path="/">
                   <Hero setId={setId}/>
              </Route>
              <Route path="/cart">
                   <Cart id={id} cartItems={cartItems} setCartItems={setCartItems}/>
              </Route>
            </Switch>
         </main>
    </div>
  );
}

export default App;
