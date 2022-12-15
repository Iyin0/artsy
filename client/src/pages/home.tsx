import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSlideshow from '../components/homeSlideshow';
import PageTransition from '../components/pageTransition';
import '../styles/home.scss'
import products from '../data/featuredProducts';
import creators from '../data/creators';
import mobileHero from '../data/mobile-hero';
import upcoming from '../data/upcoming';
import upcomingImg1 from '../images/Rectangle 91.png'


const Home = () => {

    const [currentCreatorIndex, setCurrentCreatorIndex] = useState(0)
    const creatorRef = useRef<number | null>(null)

    const reetCretorTimer = () => {
        if (creatorRef.current) window.clearInterval(creatorRef.current)
    }

    useEffect(() => {
        reetCretorTimer()
        creatorRef.current = window.setTimeout(() => {
            setCurrentCreatorIndex((prevSlide) => prevSlide === creators.length - 1 ? (0) : prevSlide + 1)
        }, 3000);

        return () => {
            reetCretorTimer()
        }
    }, [currentCreatorIndex])


    return (
        <PageTransition>
            <div className="home">
                <div className="home-intro">
                    <h1>Photography is poetry & beautiful untold stories</h1>
                    <p>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
                </div>
                <HomeSlideshow />
                <div className="home-mobile-images">
                    {mobileHero.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt="" />
                        </div>
                    ))}
                </div>
                <div className="home-products">
                    <h2>Featured products</h2>
                    {products.map((product, index) => (
                        <div className='product' key={index}>
                            <div className="image-container">
                                <div className='product-img-hover'>
                                    <p>View Product</p>
                                    <h3>{product.title}</h3>
                                    <button>
                                        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="39" cy="39" r="38.75" stroke="white" strokeWidth="0.5" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19 39C19 38.617 19.1505 38.2496 19.4184 37.9788C19.6863 37.7079 20.0496 37.5558 20.4285 37.5558H54.1206L45.1298 28.4686C44.8615 28.1974 44.7108 27.8296 44.7108 27.4461C44.7108 27.0625 44.8615 26.6947 45.1298 26.4235C45.398 26.1524 45.7618 26 46.1411 26C46.5205 26 46.8843 26.1524 47.1525 26.4235L58.5803 37.9775C58.7134 38.1116 58.8189 38.271 58.8909 38.4465C58.9629 38.6219 59 38.81 59 39C59 39.19 58.9629 39.3781 58.8909 39.5535C58.8189 39.729 58.7134 39.8884 58.5803 40.0225L47.1525 51.5765C46.8843 51.8476 46.5205 52 46.1411 52C45.7618 52 45.398 51.8476 45.1298 51.5765C44.8615 51.3053 44.7108 50.9375 44.7108 50.5539C44.7108 50.1704 44.8615 49.8026 45.1298 49.5314L54.1206 40.4442H20.4285C20.0496 40.4442 19.6863 40.2921 19.4184 40.0212C19.1505 39.7504 19 39.383 19 39Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
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

                        {upcoming.map((event, index) => (
                            <div className='upcoming-details' key={index}>
                                <div className="event-img">
                                    <img src={event.image} alt="" />
                                </div>
                                <div className='left-component'>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8.66136" cy="8.21263" r="7.9846" fill="#F5F5F5" />
                                    </svg>
                                    <p>{event.index}</p>
                                </div>
                                <div className='right-component'>
                                    <div>
                                        <h3>{event.title}</h3>
                                        <p className='start-time'>{event.startTime}</p>
                                        <p className='exclusive'>{event.description}</p>
                                    </div>
                                    <div className='link-component'>
                                        <div>
                                            <Link to='/'>See more</Link>
                                            <button>Set a reminder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                <div className="home-redirect">
                    <div className='redirect-container'>
                        <div>
                            <h2>Explore marketplace</h2>
                            <Link to='/marketplace'>
                                <svg width="101" height="91" viewBox="0 0 101 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M51.9839 11.4862C52.9332 10.5346 54.2207 10 55.5631 10C56.9055 10 58.193 10.5346 59.1423 11.4862L89.5178 41.9419C90.4668 42.8938 91 44.1847 91 45.5306C91 46.8766 90.4668 48.1675 89.5178 49.1193L59.1423 79.5751C58.1875 80.4997 56.9087 81.0114 55.5813 80.9998C54.2539 80.9882 52.9842 80.4544 52.0455 79.5133C51.1069 78.5722 50.5745 77.299 50.5629 75.9681C50.5514 74.6372 51.0617 73.355 51.9839 72.3977L73.7175 50.6066H15.0626C13.7199 50.6066 12.4322 50.0718 11.4828 49.1199C10.5334 48.168 10 46.8769 10 45.5306C10 44.1844 10.5334 42.8933 11.4828 41.9414C12.4322 40.9895 13.7199 40.4547 15.0626 40.4547H73.7175L51.9839 18.6636C51.0348 17.7117 50.5016 16.4208 50.5016 15.0749C50.5016 13.7289 51.0348 12.4381 51.9839 11.4862Z" fill="#4693ED" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className='redirect-container bottom'>
                        <div>
                            <h2>See auctions</h2>
                            <Link to='/auctions'>
                                <svg width="101" height="91" viewBox="0 0 101 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M51.9839 11.4862C52.9332 10.5346 54.2207 10 55.5631 10C56.9055 10 58.193 10.5346 59.1423 11.4862L89.5178 41.9419C90.4668 42.8938 91 44.1847 91 45.5306C91 46.8766 90.4668 48.1675 89.5178 49.1193L59.1423 79.5751C58.1875 80.4997 56.9087 81.0114 55.5813 80.9998C54.2539 80.9882 52.9842 80.4544 52.0455 79.5133C51.1069 78.5722 50.5745 77.299 50.5629 75.9681C50.5514 74.6372 51.0617 73.355 51.9839 72.3977L73.7175 50.6066H15.0626C13.7199 50.6066 12.4322 50.0718 11.4828 49.1199C10.5334 48.168 10 46.8769 10 45.5306C10 44.1844 10.5334 42.8933 11.4828 41.9414C12.4322 40.9895 13.7199 40.4547 15.0626 40.4547H73.7175L51.9839 18.6636C51.0348 17.7117 50.5016 16.4208 50.5016 15.0749C50.5016 13.7289 51.0348 12.4381 51.9839 11.4862Z" fill="#4693ED" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home-top-creators">
                    <div className="top-section">
                        <h2>TOP CREATORS OF<br /> THE WEEK</h2>
                        <div className='right-comp'>
                            <div className="slider-track">
                                <div className="slider-thumb"></div>
                            </div>
                            <div className='right-text'>
                                <p>Editorials</p>
                                <p>Fashion</p>
                                <p>Lifestyle</p>
                                <p>Blueprint</p>
                            </div>
                        </div>
                    </div>
                    <p className="paragraph">
                        “Everything always looked better in black and white. Everything always  as if it <br />
                        were the first time; there's always more people in a black and white <br />
                        photograph. It just makes it seem that there were more people at a gig, more <br />
                        people at a football match, than with colour photography. Everything looks <br />
                        more exciting.”– Jack Lowden
                    </p>
                    <div className="creators-absolute">
                        <p className='circa'>CIRCA</p>
                        <p className='ninety'>1985</p>
                        <div className="creator-img-container">
                            {creators.map((img, index) => (
                                <div
                                    key={index}
                                    style={{ transform: `translate3d(0, 0, ${currentCreatorIndex * 100}%)` }}
                                >
                                    {currentCreatorIndex === index ? (
                                        <img className='creator-img' src={img} alt="" />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="home-newsletter">
                    <div className="newsletter">
                        <h2>NEWSLETTER</h2>
                        <p>Subscribe to get daily updates on new drops & exciting deals</p>
                        <form>
                            <input type="email" placeholder='ENTER YOUR EMAIL' />
                            <button>SUSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

export default Home;