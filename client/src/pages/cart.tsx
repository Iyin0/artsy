import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/pageTransition";
import cart from "../data/cart";
import '../styles/cart.scss'
import metamask from '../images/MetaMask.png'
import coinbase from '../images/Coinbase.png'
import walletconnect from '../images/WalletConnect.png'
import phantom from '../images/Phantom.png'

const Cart = () => {

    const [quantity, setQuantity] = useState(3)
    const [cartState, setCartState] = useState(true)
    const [shippingState, setShippingState] = useState(false)
    const [paymentState, setPaymentState] = useState(false)

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [shippingState]);

    return (
        <PageTransition>
            <div className="cart">
                <header >
                    <div className="web">
                        <button
                            className={cartState && !shippingState && !paymentState ? "nav-underline" : ""}
                            onClick={() => { setCartState(true); setShippingState(false); setPaymentState(false) }}>Shopping Cart</button>
                        <button
                            className={shippingState && cartState ? "nav-underline" : ""}
                            onClick={() => { setShippingState(true); setCartState(true); setPaymentState(false) }}>Shipping datails</button>
                        <button
                            className={paymentState ? "nav-underline" : ""}
                            onClick={() => { setCartState(true); setShippingState(false); setPaymentState(true) }}>Payment datails</button>
                    </div>
                    <div className="mobile">
                        <Link to='/marketplace' className="previous">Marketplace</Link>
                        {cartState && !shippingState && !paymentState ?
                            (<div>
                                <p className="slash">/</p>
                                <p className="current">Cart</p>
                            </div>) : null
                        }
                        {shippingState && cartState ?
                            (<div>
                                <p className="slash">/</p>
                                <p className="previous">Cart</p>
                                <p className="slash">/</p>
                                <p className="current">Shipping</p>
                            </div>) : null
                        }
                        {paymentState ?
                            (<div>
                                <p className="slash">/</p>
                                <p className="previous">Cart</p>
                                <p className="slash">/</p>
                                <p className="previous">Shipping</p>
                                <p className="slash">/</p>
                                <p className="current">Payment</p>
                            </div>) : null
                        }
                    </div>
                </header>
                <main>
                    {shippingState &&
                        <form className="shipping-form">
                            <label>Your email</label><br />
                            <input type="email" placeholder="aanuoluwateenah@gmail.com" /><br />
                            <label className="updates">
                                Get updates about new drops & exclusive offers
                                <input type="checkbox" />
                                <span className="checkmark">
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.7713 10.8018L15.296 0.481049C15.5919 0.160349 15.9686 0 16.426 0C16.8834 0 17.2601 0.160349 17.5561 0.481049C17.852 0.801749 18 1.20991 18 1.70554C18 2.20117 17.852 2.60933 17.5561 2.93003L6.90134 14.4752C6.57847 14.8251 6.20179 15 5.7713 15C5.34081 15 4.96413 14.8251 4.64126 14.4752L0.443946 9.92711C0.147981 9.60641 0 9.19825 0 8.70262C0 8.207 0.147981 7.79883 0.443946 7.47813C0.73991 7.15743 1.11659 6.99708 1.57399 6.99708C2.03139 6.99708 2.40807 7.15743 2.70404 7.47813L5.7713 10.8018Z" fill="black" />
                                    </svg>
                                </span>
                            </label>
                            <label>Your full name</label><br />
                            <input type="text" placeholder="Anuoluwapo Bamisaye" /><br />
                            <label>Choose a wallet</label><br />
                            <button className="dropdown-btn" onClick={(e) => e.preventDefault()}></button>
                            <label>Country</label><br />
                            <button className="dropdown-btn" onClick={(e) => e.preventDefault()}></button>
                            <div className="city">
                                <div>
                                    <label>City</label><br />
                                    <button className="dropdown-btn" onClick={(e) => e.preventDefault()}></button>
                                </div>
                                <div>
                                    <label>Postal code</label><br />
                                    <input type="number" placeholder="001001" />
                                </div>
                            </div>
                            <label>Phone number</label>
                            <input type="tel" placeholder="0812 3456 785" />
                            <div className="ship">
                                <button
                                    onClick={(e) => { e.preventDefault(); setCartState(false); setShippingState(false); setPaymentState(true) }}>Proceed to payment
                                </button>
                                <button
                                    onClick={(e) => { e.preventDefault(); setCartState(true); setShippingState(false); setPaymentState(false) }}>
                                    Go back to cart
                                </button>
                            </div>
                        </form>
                    }
                    {paymentState &&
                        <div className="payment">
                            <div>
                                <div className="secure">
                                    <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8333 8.3125H11.6667V4.75C11.6667 2.1375 9.56667 0 7 0C4.43333 0 2.33333 2.1375 2.33333 4.75V8.3125H1.16667C0.583333 8.3125 0 8.90625 0 9.5V17.8125C0 18.4062 0.583333 19 1.16667 19H12.8333C13.4167 19 14 18.4062 14 17.8125V9.5C14 8.90625 13.4167 8.3125 12.8333 8.3125ZM8.16667 16.625H5.83333L6.3 14.0125C5.71667 13.775 5.25 13.0625 5.25 12.4688C5.25 11.5188 6.06667 10.6875 7 10.6875C7.93333 10.6875 8.75 11.5188 8.75 12.4688C8.75 13.1812 8.4 13.775 7.7 14.0125L8.16667 16.625ZM9.33333 8.3125H4.66667V4.75C4.66667 3.44375 5.71667 2.375 7 2.375C8.28333 2.375 9.33333 3.44375 9.33333 4.75V8.3125Z" fill="#747474" />
                                    </svg>
                                    <p>Secure Server</p>
                                </div>
                                <h2>Payment method</h2>
                            </div>
                            <form>
                                <div className="wallet-container">
                                    <input type="radio" defaultChecked={true} />
                                    <div className="text">
                                        <div className="wallets">
                                            <h3>Select your wallet</h3>
                                            <div className="wallet-icons">
                                                <img src={metamask} alt="" />
                                                <img src={coinbase} alt="" />
                                                <img src={walletconnect} alt="" />
                                                <img src={phantom} alt="" />
                                            </div>
                                        </div>
                                        <p>Connect with one of our available wallet providers or add and connect a new wallet</p>
                                    </div>
                                </div>
                                <label>Wallet type</label><br />
                                <input type="text" /><br />
                                <label>Key</label><br />
                                <div className="key">
                                    <input type="text" placeholder="Please enter your key" /><br />
                                    <img src={metamask} alt="" />
                                </div>
                                <div className="date">
                                    <div>
                                        <label>Expiry date</label><br />
                                        <input type="text" placeholder="MM/YY" /><br />
                                    </div>
                                    <div>
                                        <label>CVV</label><br />
                                        <input type="password" placeholder="***" /><br />
                                    </div>
                                </div>
                                <label className="save">
                                    Save my wallet details & information for future transactions
                                    <input type="checkbox" />
                                    <span className="checkmark">
                                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.7713 10.8018L15.296 0.481049C15.5919 0.160349 15.9686 0 16.426 0C16.8834 0 17.2601 0.160349 17.5561 0.481049C17.852 0.801749 18 1.20991 18 1.70554C18 2.20117 17.852 2.60933 17.5561 2.93003L6.90134 14.4752C6.57847 14.8251 6.20179 15 5.7713 15C5.34081 15 4.96413 14.8251 4.64126 14.4752L0.443946 9.92711C0.147981 9.60641 0 9.19825 0 8.70262C0 8.207 0.147981 7.79883 0.443946 7.47813C0.73991 7.15743 1.11659 6.99708 1.57399 6.99708C2.03139 6.99708 2.40807 7.15743 2.70404 7.47813L5.7713 10.8018Z" fill="black" />
                                        </svg>
                                    </span>
                                </label>
                            </form>
                            <div className="pay">
                                <button>Confirm</button>
                            </div>
                        </div>
                    }
                    {cartState &&
                        <div className={shippingState || paymentState ? "half cart-container" : "cart-container"}>
                            <div className={paymentState ? "hide-item" : "items"}>
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
                            <div className={paymentState ? "payment-summary" : "hide-payment-summary"}>
                                <div className="secure">
                                    <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.3333 21.8125H26.6667V16.75C26.6667 13.0375 23.6667 10 20 10C16.3333 10 13.3333 13.0375 13.3333 16.75V21.8125H11.6667C10.8333 21.8125 10 22.6562 10 23.5V35.3125C10 36.1562 10.8333 37 11.6667 37H28.3333C29.1667 37 30 36.1562 30 35.3125V23.5C30 22.6562 29.1667 21.8125 28.3333 21.8125ZM21.6667 33.625H18.3333L19 29.9125C18.1667 29.575 17.5 28.5625 17.5 27.7188C17.5 26.3687 18.6667 25.1875 20 25.1875C21.3333 25.1875 22.5 26.3687 22.5 27.7188C22.5 28.7313 22 29.575 21 29.9125L21.6667 33.625ZM23.3333 21.8125H16.6667V16.75C16.6667 14.8938 18.1667 13.375 20 13.375C21.8333 13.375 23.3333 14.8938 23.3333 16.75V21.8125Z" fill="#747474" />
                                    </svg>
                                    <p>Secure Server</p>
                                </div>
                                <h2>Payment Summary</h2>
                                <div>
                                    <p className="wallet">Metamask wallet : 002345KJi90pzzz3</p>
                                    <p className="active-link">Actively linked to Yaba, Lagos Nigeria.</p>
                                </div>
                                <p className="arrival">
                                    Expected arrival date: Between 22nd September and 26th September 20222
                                </p>
                            </div>
                            <div className="checkout-section">
                                <div>
                                    <button className="checkout" onClick={() => { setShippingState(true); setCartState(true); setPaymentState(false) }}>Proceed to checkout</button>
                                    <div className="link">
                                        <Link to='/marketplace'>Contnue shopping</Link>
                                    </div>
                                </div>
                                <div className="price-summary">
                                    <p>Products in cart: <span>{quantity} items</span></p>
                                    <p>Shipping: <span>$2.50</span></p>
                                    <p>Total: <span>$114.00</span></p>
                                </div>
                            </div>
                        </div>
                    }
                </main>
            </div>
        </PageTransition>
    );
}

export default Cart;