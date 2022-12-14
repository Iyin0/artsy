import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import marketItems from "../data/marketItems";
import '../styles/marketItem.scss'
import explore from "../data/explore";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import { addItem } from "../reducers/cartSlice";
import Popup from "../components/popup";


const MarketItem = () => {
    const param = useParams()
    const item = marketItems.find(item => item.id === param.id)!
    const [descState, setDescState] = useState(false)
    const [listState, setListState] = useState(false)
    const [statusState, setStatusState] = useState(false)
    const [count, setCount] = useState(0)
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector((state) => state.cart.items)
    const [popup, setPopup] = useState(false)
    const popupRef = useRef<number>(null!)
    const [popupMessage, setPopupMessage] = useState('')

    const resetPopupTimer = () => {
        if (popupRef.current) window.clearInterval(popupRef.current)
    }

    const displayPopup = (message: string) => {
        setPopupMessage(message)
        setPopup(true)
        resetPopupTimer()
        popupRef.current = window.setTimeout(() => {
            setPopup(false)
        }, 3000)
    }

    const addToCart = () => {
        if (count === 0) {
            displayPopup('No quantity selected')
        }
        else if (cartItems.find(cartitem => item.id === cartitem.id)) {
            displayPopup('Item already in cart')
        }
        else {
            dispatch(addItem({
                id: item.id,
                image: item.image,
                title: item.title,
                dollar_price: item.dollar_price,
                eth_price: item.eth_price,
                creator: item.creator,
                location: item.location,
                views: item.views,
                description: item.description,
                listings: item.listings,
                status: item.status,
                quantity: count,
                size: '200ft'
            }))
            displayPopup('Item added to cart')
        }
    }

    return (
        <div className="marketItem">
            <main>
                {popup && <Popup message={popupMessage} />}
                <div className="navigate">
                    <Link to='/marketplace'>Marketplace</Link>
                    <span>/</span>
                    <p>{item.title}</p>
                </div>
                <div className="item">
                    <div className="img-container">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="detail">
                        <div className="title">
                            <h1>{item.title}</h1>
                            <p>
                                <svg width="53" height="62" viewBox="0 0 53 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.7025 29.9475L27.5825 10.8396C27.4539 10.6765 27.2896 10.5445 27.102 10.4538C26.9145 10.3631 26.7086 10.3159 26.5 10.3159C26.2914 10.3159 26.0855 10.3631 25.8979 10.4538C25.7104 10.5445 25.5461 10.6765 25.4175 10.8396L10.2975 29.9475C10.105 30.1842 10 30.4792 10 30.7835C10 31.0877 10.105 31.3827 10.2975 31.6194L25.4175 50.7273C25.5461 50.8904 25.7104 51.0224 25.8979 51.1131C26.0855 51.2038 26.2914 51.251 26.5 51.251C26.7086 51.251 26.9145 51.2038 27.102 51.1131C27.2896 51.0224 27.4539 50.8904 27.5825 50.7273L42.7025 31.6194C42.895 31.3827 43 31.0877 43 30.7835C43 30.4792 42.895 30.1842 42.7025 29.9475ZM27.8746 35.4922V15.6166L39.4552 30.2546L27.8746 35.4922ZM25.1254 35.4922L13.5448 30.2546L25.1254 15.6166V35.4922ZM25.1254 38.4949V45.9503L15.9503 34.3491L25.1254 38.4949Z" fill="#333333" />
                                </svg>
                                <span>{item.eth_price}</span>
                            </p>
                        </div>
                        <div className="info">
                            <p className="creator">Creator : <span>{item.creator}</span></p>
                            <p className="location">Made in {item.location}</p>
                            <p className="views">Total views: <span>{item.views} views</span></p>
                            <div className="counter">
                                <button onClick={() => setCount(count === 0 ? 0 : count - 1)}>-</button>
                                <p>{count}</p>
                                <button onClick={() => setCount(count === 10 ? 10 : count + 1)}>+</button>
                            </div>
                            <div className="cart-addition">
                                <button className="add-cart" onClick={addToCart}>Add to cart
                                    <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 16.7403C10 16.5417 10.079 16.3512 10.2197 16.2108C10.3603 16.0703 10.5511 15.9914 10.75 15.9914H28.4395L23.719 11.2799C23.5782 11.1393 23.4991 10.9486 23.4991 10.7498C23.4991 10.5509 23.5782 10.3602 23.719 10.2196C23.8598 10.079 24.0508 10 24.25 10C24.4492 10 24.6402 10.079 24.781 10.2196L30.781 16.2101C30.8508 16.2797 30.9063 16.3623 30.9441 16.4533C30.9819 16.5442 31.0013 16.6418 31.0013 16.7403C31.0013 16.8388 30.9819 16.9363 30.9441 17.0273C30.9063 17.1182 30.8508 17.2009 30.781 17.2704L24.781 23.2609C24.6402 23.4015 24.4492 23.4805 24.25 23.4805C24.0508 23.4805 23.8598 23.4015 23.719 23.2609C23.5782 23.1203 23.4991 22.9296 23.4991 22.7308C23.4991 22.5319 23.5782 22.3412 23.719 22.2006L28.4395 17.4891H10.75C10.5511 17.4891 10.3603 17.4102 10.2197 17.2697C10.079 17.1293 10 16.9389 10 16.7403Z" fill="#F5F4F4" />
                                    </svg>
                                </button>
                                <button className="fav">
                                    <svg width="49" height="34" viewBox="0 0 49 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.1161 5.95214L24.514 6.47514L24.9119 5.95214C27.0609 3.12763 30.8802 1.29517 35.2617 1.29517C42.1664 1.29517 47.6589 6.00547 47.6589 11.5823C47.6589 14.0997 46.2744 16.6813 44.0884 19.1745C41.9107 21.6583 38.993 23.9908 36.0541 26.002C33.1184 28.0109 30.1799 29.6869 27.9736 30.8612C26.871 31.4481 25.9525 31.909 25.3104 32.2228C24.9894 32.3797 24.7375 32.4999 24.5663 32.5806C24.5483 32.5891 24.5311 32.5972 24.5148 32.6048C24.4985 32.5971 24.4812 32.5889 24.463 32.5802C24.2918 32.4989 24.0399 32.3778 23.7189 32.2198C23.0767 31.9036 22.1582 31.4395 21.0555 30.8491C18.8491 29.6678 15.9103 27.9833 12.9745 25.9687C10.0353 23.9517 7.11733 21.6162 4.93933 19.1363C2.75267 16.6464 1.36914 14.0763 1.36914 11.5823C1.36914 6.00547 6.86164 1.29517 13.7663 1.29517C18.1478 1.29517 21.9671 3.12763 24.1161 5.95214Z" stroke="#292929" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="description">
                            <button onClick={() => setDescState(!descState)}>Description
                                <svg className={descState ? "" : "reverse"} width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3522 10.3442C10.5778 10.1238 10.8837 10 11.2026 10C11.5216 10 11.8275 10.1238 12.053 10.3442L18.0073 16.1627L23.9615 10.3442C24.1883 10.13 24.4922 10.0116 24.8076 10.0142C25.123 10.0169 25.4247 10.1405 25.6477 10.3585C25.8707 10.5764 25.9972 10.8712 26 11.1794C26.0027 11.4876 25.8815 11.7846 25.6623 12.0063L18.8577 18.6558C18.6321 18.8762 18.3262 19 18.0073 19C17.6883 19 17.3824 18.8762 17.1568 18.6558L10.3522 12.0063C10.1267 11.7858 10 11.4869 10 11.1752C10 10.8635 10.1267 10.5646 10.3522 10.3442Z" fill="#2F2F2F" />
                                </svg>
                            </button>
                            {descState &&
                                <p>{item.description}</p>
                            }
                        </div>
                        <div className="listings">
                            <button onClick={() => setListState(!listState)}>Listings
                                <svg className={listState ? "" : "reverse"} width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3522 10.3442C10.5778 10.1238 10.8837 10 11.2026 10C11.5216 10 11.8275 10.1238 12.053 10.3442L18.0073 16.1627L23.9615 10.3442C24.1883 10.13 24.4922 10.0116 24.8076 10.0142C25.123 10.0169 25.4247 10.1405 25.6477 10.3585C25.8707 10.5764 25.9972 10.8712 26 11.1794C26.0027 11.4876 25.8815 11.7846 25.6623 12.0063L18.8577 18.6558C18.6321 18.8762 18.3262 19 18.0073 19C17.6883 19 17.3824 18.8762 17.1568 18.6558L10.3522 12.0063C10.1267 11.7858 10 11.4869 10 11.1752C10 10.8635 10.1267 10.5646 10.3522 10.3442Z" fill="#2F2F2F" />
                                </svg>
                            </button>
                            {listState &&
                                <p>{item.listings}</p>
                            }
                        </div>
                        <div className="status">
                            <button onClick={() => setStatusState(!statusState)}>Status
                                <svg className={statusState ? "" : "reverse"} width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3522 10.3442C10.5778 10.1238 10.8837 10 11.2026 10C11.5216 10 11.8275 10.1238 12.053 10.3442L18.0073 16.1627L23.9615 10.3442C24.1883 10.13 24.4922 10.0116 24.8076 10.0142C25.123 10.0169 25.4247 10.1405 25.6477 10.3585C25.8707 10.5764 25.9972 10.8712 26 11.1794C26.0027 11.4876 25.8815 11.7846 25.6623 12.0063L18.8577 18.6558C18.6321 18.8762 18.3262 19 18.0073 19C17.6883 19 17.3824 18.8762 17.1568 18.6558L10.3522 12.0063C10.1267 11.7858 10 11.4869 10 11.1752C10 10.8635 10.1267 10.5646 10.3522 10.3442Z" fill="#2F2F2F" />
                                </svg>
                            </button>
                            {statusState &&
                                <p>{item.status}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="explore-more">
                    <div className="explore">
                        <p>Explore more from this collection</p>
                        <div>
                            <button>
                                <svg width="35" height="46" viewBox="0 0 35 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3392 23.5015L22.5109 35.1171C22.714 35.311 22.9838 35.4192 23.2644 35.4192C23.5449 35.4192 23.8148 35.311 24.0179 35.1171L24.031 35.104C24.1298 35.01 24.2084 34.8968 24.2622 34.7714C24.3159 34.646 24.3437 34.5109 24.3437 34.3744C24.3437 34.238 24.3159 34.1029 24.2622 33.9775C24.2084 33.8521 24.1298 33.7389 24.031 33.6449L12.5691 22.7074L24.031 11.7743C24.1298 11.6803 24.2084 11.5671 24.2622 11.4417C24.3159 11.3163 24.3437 11.1812 24.3437 11.0448C24.3437 10.9083 24.3159 10.7732 24.2622 10.6478C24.2084 10.5224 24.1298 10.4092 24.031 10.3152L24.0179 10.3021C23.8148 10.1082 23.5449 10 23.2644 10C22.9838 10 22.714 10.1082 22.5109 10.3021L10.3392 21.9177C10.2322 22.0199 10.147 22.1427 10.0887 22.2789C10.0305 22.415 10.0005 22.5615 10.0005 22.7096C10.0005 22.8577 10.0305 23.0042 10.0887 23.1404C10.147 23.2765 10.2322 23.3993 10.3392 23.5015Z" fill="#616161" />
                                </svg>
                            </button>
                            <button>
                                <svg width="35" height="46" viewBox="0 0 35 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.0045 21.9177L11.8329 10.3021C11.6298 10.1082 11.36 10 11.0794 10C10.7988 10 10.529 10.1082 10.3259 10.3021L10.3128 10.3152C10.214 10.4092 10.1353 10.5224 10.0816 10.6478C10.0278 10.7732 10.0001 10.9083 10.0001 11.0447C10.0001 11.1812 10.0278 11.3163 10.0816 11.4417C10.1353 11.5671 10.214 11.6803 10.3128 11.7743L21.7746 22.7118L10.3128 33.6449C10.214 33.7389 10.1353 33.8521 10.0816 33.9775C10.0278 34.1029 10.0001 34.2379 10.0001 34.3744C10.0001 34.5109 10.0278 34.646 10.0816 34.7714C10.1353 34.8968 10.214 35.01 10.3128 35.104L10.3259 35.1171C10.529 35.311 10.7988 35.4192 11.0794 35.4192C11.36 35.4192 11.6298 35.311 11.8329 35.1171L24.0045 23.5015C24.1116 23.3993 24.1968 23.2765 24.255 23.1403C24.3132 23.0042 24.3433 22.8577 24.3433 22.7096C24.3433 22.5615 24.3132 22.415 24.255 22.2788C24.1968 22.1427 24.1116 22.0199 24.0045 21.9177Z" fill="#333333" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p className="more">More from this collection</p>
                    <div className="explore-container">
                        {explore.map((item, index) => (
                            <div className="explore-item" key={index}>
                                <div className="like">
                                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5893 3.88513L16 4.47678L16.4107 3.88513C17.8374 1.82999 20.3691 0.5 23.2727 0.5C27.8384 0.5 31.5 3.91621 31.5 8C31.5 9.83598 30.5784 11.7266 29.1096 13.5627C27.6463 15.3917 25.6829 17.1128 23.7 18.6C21.72 20.085 19.7373 21.3244 18.2481 22.1931C17.504 22.6272 16.8843 22.968 16.4514 23.1999C16.2648 23.2998 16.113 23.3795 16.0009 23.4377C15.8888 23.379 15.7368 23.2987 15.5499 23.1979C15.117 22.9642 14.4972 22.6211 13.7531 22.1844C12.2637 21.3104 10.2808 20.0647 8.30053 18.5754C6.31741 17.0839 4.35369 15.3605 2.89018 13.5342C1.42075 11.7005 0.5 9.81845 0.5 8C0.5 3.91621 4.16157 0.5 8.72727 0.5C11.6309 0.5 14.1626 1.82999 15.5893 3.88513Z" stroke="black" />
                                    </svg>
                                </div>
                                <img src={item.image} alt="" />
                                <div className="details">
                                    <p className="title">{item.title}</p>
                                    <p className="price">
                                        <svg width="44" height="51" viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M35.4513 24.8003L22.8988 8.8078C22.792 8.67127 22.6556 8.56085 22.4999 8.48491C22.3442 8.40897 22.1733 8.36951 22.0001 8.36951C21.8269 8.36951 21.656 8.40897 21.5003 8.48491C21.3446 8.56085 21.2082 8.67127 21.1015 8.8078L8.54895 24.8003C8.38916 24.9984 8.302 25.2453 8.302 25.4999C8.302 25.7546 8.38916 26.0015 8.54895 26.1996L21.1015 42.1921C21.2082 42.3286 21.3446 42.439 21.5003 42.515C21.656 42.5909 21.8269 42.6304 22.0001 42.6304C22.1733 42.6304 22.3442 42.5909 22.4999 42.515C22.6556 42.439 22.792 42.3286 22.8988 42.1921L35.4513 26.1996C35.6111 26.0015 35.6982 25.7546 35.6982 25.4999C35.6982 25.2453 35.6111 24.9984 35.4513 24.8003ZM23.1413 29.4409V12.8059L32.7553 25.0573L23.1413 29.4409ZM20.859 29.4409L11.2449 25.0573L20.859 12.8059V29.4409ZM20.859 31.954V38.194L13.2419 28.4843L20.859 31.954Z" fill="#333333" />
                                        </svg>
                                        {item.eth_price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-container">
                        <button>Explore all</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MarketItem;