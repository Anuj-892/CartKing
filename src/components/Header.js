import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({cartItems}) => {
    return (
        <header>
           <div className="container">
                <h1>
                    <Link to="/" className="link">CartKing</Link>
                </h1>

                <nav>
                    <ul>
                        <li>
                            <Link to="/cart" className="link">
                                <i class="fas fa-shopping-cart"></i>
                                <div className="cart-length">{cartItems.length}</div>
                            </Link>
                        </li>
                    </ul>
                </nav>
           </div>
        </header>
    )
}

export default Header
