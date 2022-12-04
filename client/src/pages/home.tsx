import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSlideshow from '../components/homeSlideshow';
import PageTransition from '../components/pageTransition';
import '../styles/home.scss'


const Home = () => {

    const Products = [
        {
            image: "../src/images/Rectangle 299-2.png",
            title: "The Boolean Egyptian",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, eaque. Explicabo architecto porro, laborum nemo reprehenderit labore ipsam aut unde.",
            creators_img: [
                "../src/images/Ellipse 19.png",
                "../src/images/Ellipse 20.png",
                "../src/images/Ellipse 21.png",
                "../src/images/Ellipse 22.png",
                "../src/images/Ellipse 23.png"
            ],
            creators_no: 65,
        },
        {
            image: "../src/images/Rectangle 299-1.png",
            title: "The Boolean Egyptian",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, eaque. Explicabo architecto porro, laborum nemo reprehenderit labore ipsam aut unde.",
            creators_img: [
                "../src/images/Ellipse 19.png",
                "../src/images/Ellipse 20.png",
                "../src/images/Ellipse 21.png",
                "../src/images/Ellipse 22.png",
                "../src/images/Ellipse 23.png"
            ],
            creators_no: 65,
        },
        {
            image: "../src/images/Rectangle 299-3.png",
            title: "The Boolean Egyptian",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, eaque. Explicabo architecto porro, laborum nemo reprehenderit labore ipsam aut unde.",
            creators_img: [
                "../src/images/Ellipse 19.png",
                "../src/images/Ellipse 20.png",
                "../src/images/Ellipse 21.png",
                "../src/images/Ellipse 22.png",
                "../src/images/Ellipse 23.png"
            ],
            creators_no: 65,
        },
    ]

    const [productHover, setProductHover] = useState(false)
    const [productIndex, setProductIndex] = useState<number | null>(null)
    const productsRef = useRef<HTMLDivElement>(null!)

    useEffect(() => {
        productsRef.current.children[2].classList.add('reversed')
    }, [productsRef])

    return (
        <PageTransition>
            <div className="home">
                <div className="home-intro">
                    <h1>Photography is poetry & <br /> beautiful untold stories</h1>
                    <p>Flip through more than 10,000 vintage shots, old photograghs, historic <br /> images and captures seamlessly in one place. Register to get top access.</p>
                </div>
                <HomeSlideshow />
                <div className="home-products" ref={productsRef}>
                    <h2>Featured products</h2>
                    {Products.map((product, index) => (
                        <div className='product' key={index}>
                            <div className="image-container"
                                onMouseEnter={() => { setProductHover(true); setProductIndex(index) }}
                                onMouseLeave={() => { setProductHover(false); setProductIndex(null) }}
                            >
                                {productHover && productIndex === index ? (
                                    <div className='product-img-hover'>
                                        <p>View Product</p>
                                        <button>
                                            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="39" cy="39" r="38.75" stroke="white" stroke-width="0.5" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M19 39C19 38.617 19.1505 38.2496 19.4184 37.9788C19.6863 37.7079 20.0496 37.5558 20.4285 37.5558H54.1206L45.1298 28.4686C44.8615 28.1974 44.7108 27.8296 44.7108 27.4461C44.7108 27.0625 44.8615 26.6947 45.1298 26.4235C45.398 26.1524 45.7618 26 46.1411 26C46.5205 26 46.8843 26.1524 47.1525 26.4235L58.5803 37.9775C58.7134 38.1116 58.8189 38.271 58.8909 38.4465C58.9629 38.6219 59 38.81 59 39C59 39.19 58.9629 39.3781 58.8909 39.5535C58.8189 39.729 58.7134 39.8884 58.5803 40.0225L47.1525 51.5765C46.8843 51.8476 46.5205 52 46.1411 52C45.7618 52 45.398 51.8476 45.1298 51.5765C44.8615 51.3053 44.7108 50.9375 44.7108 50.5539C44.7108 50.1704 44.8615 49.8026 45.1298 49.5314L54.1206 40.4442H20.4285C20.0496 40.4442 19.6863 40.2921 19.4184 40.0212C19.1505 39.7504 19 39.383 19 39Z" fill="white" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : null}
                                <img className='product-img' src={product.image} alt="" />
                            </div>
                            <div className="product-detail">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <div>
                                    <div className='creator-images'>
                                        {product.creators_img.map((img, index) => (
                                            <img src={img} alt="" key={index} />
                                        ))}
                                        <p>{product.creators_no} major creactors</p>
                                    </div>
                                    <button>
                                        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="39" cy="39" r="38.75" stroke="#333333" strokeWidth="0.5" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19 39C19 38.617 19.1505 38.2496 19.4184 37.9788C19.6863 37.7079 20.0496 37.5558 20.4285 37.5558H54.1206L45.1298 28.4686C44.8615 28.1974 44.7108 27.8296 44.7108 27.4461C44.7108 27.0625 44.8615 26.6947 45.1298 26.4235C45.398 26.1524 45.7618 26 46.1411 26C46.5205 26 46.8843 26.1524 47.1525 26.4235L58.5803 37.9775C58.7134 38.1116 58.8189 38.271 58.8909 38.4465C58.9629 38.6219 59 38.81 59 39C59 39.19 58.9629 39.3781 58.8909 39.5535C58.8189 39.729 58.7134 39.8884 58.5803 40.0225L47.1525 51.5765C46.8843 51.8476 46.5205 52 46.1411 52C45.7618 52 45.398 51.8476 45.1298 51.5765C44.8615 51.3053 44.7108 50.9375 44.7108 50.5539C44.7108 50.1704 44.8615 49.8026 45.1298 49.5314L54.1206 40.4442H20.4285C20.0496 40.4442 19.6863 40.2921 19.4184 40.0212C19.1505 39.7504 19 39.383 19 39Z" fill="#616161" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="home-upcoming">
                    <div className='upcoming-container'>
                        <h2>See Upcoming Auctions and Exhibitions</h2>
                        <svg className='arrow' width="668" height="6" viewBox="0 0 668 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M667.283 3.28284C667.439 3.12663 667.439 2.87337 667.283 2.71716L664.737 0.171573C664.581 0.0153632 664.328 0.0153632 664.172 0.171573C664.015 0.327783 664.015 0.581048 664.172 0.737258L666.434 3L664.172 5.26274C664.015 5.41895 664.015 5.67222 664.172 5.82843C664.328 5.98464 664.581 5.98464 664.737 5.82843L667.283 3.28284ZM0 3.4H667V2.6H0V3.4Z" fill="white" />
                        </svg>

                        <div className='upcoming-details'>
                            <div className='left-component'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.66136" cy="8.21263" r="7.9846" fill="#F5F5F5" />
                                </svg>
                                <p>01</p>
                            </div>
                            <div className='right-component'>
                                <div>
                                    <h3>MONALISA REDEFINED <br />IN STYLE</h3>
                                    <p className='start-time'>START ON: 08:00 GTS. MONDAY</p>
                                    <p className='exclusive'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH <br />INVESTORS AND AUCTIONEERS
                                        ACROSS THE WORLD BRINGING THEIR <br />HIGHEST AND LOWEST BIDS.</p>
                                </div>
                                <div className='link-component'>
                                    <div>
                                        <Link to='/'>See more</Link>
                                        <button>Set a reminder</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='upcoming-bottom'>
                            <div className="slider-track">
                                <div className="slider-thumb"></div>
                            </div>
                            <div className='btns'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_433_225)">
                                            <path d="M8.94469 9.85521L12.791 6.00888L11.6923 4.91016L6.74724 9.85521L11.6923 14.8003L12.791 13.7015L8.94469 9.85521Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_433_225">
                                                <rect width="18.6488" height="18.6488" fill="white" transform="matrix(-1 0 0 1 19.1798 0.530762)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_433_222)">
                                            <path d="M10.915 9.85521L7.06873 6.00888L8.16745 4.91016L13.1125 9.85521L8.16745 14.8003L7.06873 13.7015L10.915 9.85521Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_433_222">
                                                <rect width="18.6488" height="18.6488" fill="white" transform="translate(0.679932 0.530762)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

export default Home;