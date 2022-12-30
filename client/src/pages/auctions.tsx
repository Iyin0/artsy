import PageTransition from "../components/pageTransition";
import { activeAuctions } from '../data/upcomingAuction'
import { topBids } from '../data/upcomingAuction'
import convert from "../components/convert";
import '../styles/auctions.scss'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Auctions = () => {

    const navigate = useNavigate()

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <PageTransition>
            <div className="auctions">
                <main>
                    <div className="active">
                        <p>Here's an overview of products actively on auction, explore!</p>
                        <div className="items">
                            {activeAuctions.map((item, index) => (
                                <div key={index} className='item'>
                                    <img src={item.image} alt="" />
                                    <div className="timer">
                                        <p>{convert((item.time / 1000))}</p>
                                    </div>
                                    <div className="hover-component">
                                        <p>Join livestream</p>
                                        <button onClick={() => navigate(`/auctions/live-bid/${item.id}`)}>
                                            <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13Z" fill="white" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="top-bids">
                        <p className="top">Top bids from popular creators</p>
                        <div className="bids">
                            {topBids.map((bid, index) => (
                                <div className="bid" key={index}>
                                    <div className="picture">
                                        <div className="like">
                                            <button>
                                                {bid.liked ? (
                                                    <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 0C20.85 0 18.075 1.575 16.5 4.05C14.925 1.575 12.15 0 9 0C4.05 0 0 4.05 0 9C0 17.925 16.5 27 16.5 27C16.5 27 33 18 33 9C33 4.05 28.95 0 24 0Z" fill="#F44336" />
                                                    </svg>
                                                ) : (
                                                    <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 0C20.85 0 18.075 1.575 16.5 4.05C14.925 1.575 12.15 0 9 0C4.05 0 0 4.05 0 9C0 17.925 16.5 27 16.5 27C16.5 27 33 18 33 9C33 4.05 28.95 0 24 0Z" fill="#DDBAB7" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        <img src={bid.image} alt="" />
                                        <div className="detail">
                                            <p>{bid.title}</p>
                                            <p>{bid.highest_bid} ETH</p>
                                        </div>
                                    </div>
                                    <p className="creator">Creator <span>:   {bid.creator}</span></p>
                                    <p>Date <span>:   {bid.date}</span></p>
                                    <p className="highest">Highest bid <span>:   {bid.highest_bid} ETH</span></p>
                                    <div className="current-bid">
                                        <p>Current bid <span>{bid.current_bid}</span></p>
                                        <button>Place bid</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    );
}

export default Auctions;