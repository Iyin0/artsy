import { useState } from "react";
import { Link } from "react-router-dom";
import CartHeader from "../components/cartHeader";
import PageTransition from "../components/pageTransition";
import cart from "../data/cart";
import '../styles/cart.scss'

const Cart = () => {

    const [quantity, setQuantity] = useState(3)

    return (
        <PageTransition>
            <div className="cart">
                <CartHeader />
                <main>
                    <div className="items">
                        {cart.map((item, index) => (
                            <div className="item" key={index}>
                                <img src={item.image} alt="" />
                                <div className="detail">
                                    <div>
                                        <p className="title">{item.title}</p>
                                        <p className="creator">{item.creator}</p>
                                        <p className="size">Size:<span>{item.size}</span></p>
                                        <div className="counter">
                                            <button>-</button>
                                            <p>{item.quantity}</p>
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <button>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.8306 13L1.83057 1M13.8306 1L1.83057 13" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <p className="price">${item.amount}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-section">
                        <div>
                            <button className="checkout">Proceed to checkout</button>
                            <div className="link">
                                <Link to='/marketplace'>Contnue shopping</Link>
                            </div>
                        </div>
                        <div>
                            <p>Products in cart: <span>{quantity} items</span></p>
                            <p>Shipping: <span>$2.50</span></p>
                            <p>Total: <span>$114.00</span></p>
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    );
}

export default Cart;