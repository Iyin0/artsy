import { Link, useNavigate, useParams } from "react-router-dom";
import PageTransition from "../components/pageTransition";
import { activeAuctions } from "../data/upcomingAuction";
import '../styles/liveBid.scss'

const LiveBid = () => {

    const param = useParams()
    const navigate = useNavigate()
    const item = activeAuctions.find(item => item.id === param.id)

    return (
        <PageTransition>
            <div className="live-bid">
                <main>
                    <div className="navigate">
                        <Link to='/auctions'>Auctions</Link>
                        <span>/</span>
                        <p>{item?.tag}</p>
                    </div>
                    <div className="bid-area">
                        <div className="item">
                            <img src={item?.image} alt="" />
                            <div className="texts">
                                <div className="live">
                                    <button onClick={() => navigate('/auctions')}>
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3299 11.9229C10.2253 11.8183 10.1424 11.6941 10.0857 11.5575C10.0291 11.4208 10 11.2743 10 11.1264C10 10.9785 10.0291 10.832 10.0857 10.6954C10.1424 10.5587 10.2253 10.4345 10.3299 10.3299C10.4345 10.2253 10.5587 10.1424 10.6954 10.0857C10.832 10.0291 10.9785 10 11.1264 10C11.2743 10 11.4208 10.0291 11.5575 10.0857C11.6941 10.1424 11.8183 10.2253 11.9229 10.3299L23.5014 21.9107L35.0799 10.3299C35.1845 10.2253 35.3087 10.1424 35.4454 10.0857C35.582 10.0291 35.7285 10 35.8764 10C36.0243 10 36.1708 10.0291 36.3075 10.0857C36.4441 10.1424 36.5683 10.2253 36.6729 10.3299C36.7775 10.4345 36.8605 10.5587 36.9171 10.6954C36.9737 10.832 37.0028 10.9785 37.0028 11.1264C37.0028 11.2743 36.9737 11.4208 36.9171 11.5575C36.8605 11.6941 36.7775 11.8183 36.6729 11.9229L25.0922 23.5014L36.6729 35.0799C36.7775 35.1845 36.8605 35.3087 36.9171 35.4454C36.9737 35.582 37.0028 35.7285 37.0028 35.8764C37.0028 36.0243 36.9737 36.1708 36.9171 36.3075C36.8605 36.4441 36.7775 36.5683 36.6729 36.6729C36.5683 36.7775 36.4441 36.8605 36.3075 36.9171C36.1708 36.9737 36.0243 37.0028 35.8764 37.0028C35.7285 37.0028 35.582 36.9737 35.4454 36.9171C35.3087 36.8605 35.1845 36.7775 35.0799 36.6729L23.5014 25.0922L11.9229 36.6729C11.8183 36.7775 11.6941 36.8605 11.5575 36.9171C11.4208 36.9737 11.2743 37.0028 11.1264 37.0028C10.9785 37.0028 10.832 36.9737 10.6954 36.9171C10.5587 36.8605 10.4345 36.7775 10.3299 36.6729C10.2253 36.5683 10.1424 36.4441 10.0857 36.3075C10.0291 36.1708 10 36.0243 10 35.8764C10 35.7285 10.0291 35.582 10.0857 35.4454C10.1424 35.3087 10.2253 35.1845 10.3299 35.0799L21.9107 23.5014L10.3299 11.9229Z" fill="white" />
                                        </svg>
                                    </button>
                                    <p>LIVE</p>
                                </div>
                                <p className="current-bid">Current bid $4500</p>
                                <p className="tag">Tag: {item?.tag}</p>
                            </div>
                        </div>
                        <div className="interactions">
                            <div className="comments">
                                {item?.bidders.map((comment, index) => (
                                    <div className="comment" key={index}>
                                        <img src={comment.avatar} alt="" />
                                        <div>
                                            <p className="name">{comment.name}</p>
                                            <p className="bid">${comment.bid}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="creator">Creator: {item?.creator}</p>
                            <div className="input-area">
                                <div>
                                    <input type="text" placeholder="Place a bid in dollars..." />
                                    <button>
                                        <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M43.6074 10.3762C43.416 10.2027 43.1742 10.0825 42.9104 10.0299C42.6465 9.97729 42.3717 9.99435 42.1182 10.0791L10.9153 20.4119C10.6462 20.5048 10.4145 20.6701 10.251 20.8858C10.0876 21.1016 10 21.3574 10 21.6195C10 21.8816 10.0876 22.1375 10.251 22.3532C10.4145 22.5689 10.6462 22.7342 10.9153 22.8272L23.0986 27.2574L32.0907 19.0428L34.0905 20.864L25.0559 29.0914L29.9349 40.1863C30.04 40.4266 30.2219 40.6327 30.4571 40.7777C30.6923 40.9228 30.9699 41.0002 31.2539 41C31.5405 40.9946 31.8186 40.9103 32.0516 40.7581C32.2845 40.606 32.4613 40.3931 32.5588 40.1475L43.9053 11.7323C44.0019 11.5038 44.0252 11.255 43.9725 11.0149C43.9197 10.7748 43.7931 10.5532 43.6074 10.3762Z" fill="#292929" />
                                        </svg>
                                    </button>
                                </div>
                                <button className="like">
                                    <svg width="60" height="53" viewBox="0 0 60 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_i_560_260)">
                                            <path d="M38.4215 10.2925C34.7185 10.2925 31.4563 12.1981 29.6048 15.1927C27.7533 12.1981 24.4911 10.2925 20.7881 10.2925C14.969 10.2925 10.208 15.1927 10.208 21.1819C10.208 31.9806 29.6048 42.9608 29.6048 42.9608C29.6048 42.9608 49.0016 32.0713 49.0016 21.1819C49.0016 15.1927 44.2406 10.2925 38.4215 10.2925Z" fill="#E31616" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_i_560_260" x="10.208" y="10.2925" width="38.7939" height="40.8353" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="8.16707" />
                                                <feGaussianBlur stdDeviation="4.08353" />
                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_560_260" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="drops">
                        <p>See upcoming drops</p>
                        <button onClick={() => navigate('/drops')}>
                            <svg width="60" height="46" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 23C10 22.617 10.1505 22.2496 10.4184 21.9788C10.6863 21.7079 11.0496 21.5558 11.4285 21.5558H45.1206L36.1298 12.4686C35.8615 12.1974 35.7108 11.8296 35.7108 11.4461C35.7108 11.0625 35.8615 10.6947 36.1298 10.4235C36.398 10.1524 36.7618 10 37.1411 10C37.5205 10 37.8843 10.1524 38.1525 10.4235L49.5803 21.9775C49.7134 22.1116 49.8189 22.271 49.8909 22.4465C49.9629 22.6219 50 22.81 50 23C50 23.19 49.9629 23.3781 49.8909 23.5535C49.8189 23.729 49.7134 23.8884 49.5803 24.0225L38.1525 35.5765C37.8843 35.8476 37.5205 36 37.1411 36C36.7618 36 36.398 35.8476 36.1298 35.5765C35.8615 35.3053 35.7108 34.9375 35.7108 34.5539C35.7108 34.1704 35.8615 33.8026 36.1298 33.5314L45.1206 24.4442H11.4285C11.0496 24.4442 10.6863 24.2921 10.4184 24.0212C10.1505 23.7504 10 23.383 10 23Z" fill="#616161" />
                            </svg>
                        </button>
                    </div>
                </main>
            </div>
        </PageTransition>
    );
}

export default LiveBid;