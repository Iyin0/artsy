import { Link } from "react-router-dom";
import PageTransition from "../components/pageTransition";
import marketItems from "../data/marketItems";
import '../styles/marketplace.scss'

const Marketplace = () => {
    return (
        <PageTransition>
            <div className="marketplace">
                <aside>
                    <div className="search-container">
                        <div className="search">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9741 33.947C24.6309 33.9464 27.211 33.0571 29.3038 31.4206L35.8836 38L38 35.8837L31.4202 29.3043C33.0577 27.2114 33.9476 24.6308 33.9483 21.9735C33.9483 15.3716 28.5764 10 21.9741 10C15.3719 10 10 15.3716 10 21.9735C10 28.5754 15.3719 33.947 21.9741 33.947ZM21.9741 12.9934C26.9269 12.9934 30.9547 17.021 30.9547 21.9735C30.9547 26.926 26.9269 30.9536 21.9741 30.9536C17.0213 30.9536 12.9935 26.926 12.9935 21.9735C12.9935 17.021 17.0213 12.9934 21.9741 12.9934Z" fill="#999999" />
                            </svg>
                            <input type="search" placeholder="Search" />
                        </div>
                    </div>
                    <div className="filters">
                        <div className="header">
                            <div>
                                <svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0417 14.4221C20.456 14.4221 19.8943 14.6547 19.4801 15.0689C19.066 15.483 18.8333 16.0447 18.8333 16.6304C18.8333 17.2161 19.066 17.7778 19.4801 18.1919C19.8943 18.6061 20.456 18.8387 21.0417 18.8387C21.6274 18.8387 22.1891 18.6061 22.6032 18.1919C23.0173 17.7778 23.25 17.2161 23.25 16.6304C23.25 16.0447 23.0173 15.483 22.6032 15.0689C22.1891 14.6547 21.6274 14.4221 21.0417 14.4221ZM14.7921 14.4221C15.2483 13.129 16.0944 12.0093 17.2137 11.2173C18.3331 10.4253 19.6705 10 21.0417 10C22.4128 10 23.7503 10.4253 24.8696 11.2173C25.9889 12.0093 26.835 13.129 27.2912 14.4221H43.125C43.7107 14.4221 44.2724 14.6547 44.6865 15.0689C45.1007 15.483 45.3333 16.0447 45.3333 16.6304C45.3333 17.2161 45.1007 17.7778 44.6865 18.1919C44.2724 18.6061 43.7107 18.8387 43.125 18.8387H27.2912C26.835 20.1318 25.9889 21.2515 24.8696 22.0435C23.7503 22.8355 22.4128 23.2608 21.0417 23.2608C19.6705 23.2608 18.3331 22.8355 17.2137 22.0435C16.0944 21.2515 15.2483 20.1318 14.7921 18.8387H12.2083C11.6226 18.8387 11.0609 18.6061 10.6468 18.1919C10.2327 17.7778 10 17.2161 10 16.6304C10 16.0447 10.2327 15.483 10.6468 15.0689C11.0609 14.6547 11.6226 14.4221 12.2083 14.4221H14.7921ZM34.2917 27.6721C33.706 27.6721 33.1443 27.9047 32.7301 28.3189C32.316 28.733 32.0833 29.2947 32.0833 29.8804C32.0833 30.4661 32.316 31.0278 32.7301 31.4419C33.1443 31.8561 33.706 32.0887 34.2917 32.0887C34.8774 32.0887 35.4391 31.8561 35.8532 31.4419C36.2673 31.0278 36.5 30.4661 36.5 29.8804C36.5 29.2947 36.2673 28.733 35.8532 28.3189C35.4391 27.9047 34.8774 27.6721 34.2917 27.6721ZM28.0421 27.6721C28.4983 26.379 29.3444 25.2593 30.4637 24.4673C31.5831 23.6753 32.9205 23.25 34.2917 23.25C35.6628 23.25 37.0003 23.6753 38.1196 24.4673C39.2389 25.2593 40.085 26.379 40.5412 27.6721H43.125C43.7107 27.6721 44.2724 27.9047 44.6865 28.3189C45.1007 28.733 45.3333 29.2947 45.3333 29.8804C45.3333 30.4661 45.1007 31.0278 44.6865 31.4419C44.2724 31.8561 43.7107 32.0887 43.125 32.0887H40.5412C40.085 33.3818 39.2389 34.5015 38.1196 35.2935C37.0003 36.0855 35.6628 36.5108 34.2917 36.5108C32.9205 36.5108 31.5831 36.0855 30.4637 35.2935C29.3444 34.5015 28.4983 33.3818 28.0421 32.0887H12.2083C11.6226 32.0887 11.0609 31.8561 10.6468 31.4419C10.2327 31.0278 10 30.4661 10 29.8804C10 29.2947 10.2327 28.733 10.6468 28.3189C11.0609 27.9047 11.6226 27.6721 12.2083 27.6721H28.0421ZM21.0417 40.9221C20.456 40.9221 19.8943 41.1547 19.4801 41.5689C19.066 41.983 18.8333 42.5447 18.8333 43.1304C18.8333 43.7161 19.066 44.2778 19.4801 44.6919C19.8943 45.1061 20.456 45.3387 21.0417 45.3387C21.6274 45.3387 22.1891 45.1061 22.6032 44.6919C23.0173 44.2778 23.25 43.7161 23.25 43.1304C23.25 42.5447 23.0173 41.983 22.6032 41.5689C22.1891 41.1547 21.6274 40.9221 21.0417 40.9221ZM14.7921 40.9221C15.2483 39.629 16.0944 38.5093 17.2137 37.7173C18.3331 36.9253 19.6705 36.5 21.0417 36.5C22.4128 36.5 23.7503 36.9253 24.8696 37.7173C25.9889 38.5093 26.835 39.629 27.2912 40.9221H43.125C43.7107 40.9221 44.2724 41.1547 44.6865 41.5689C45.1007 41.983 45.3333 42.5447 45.3333 43.1304C45.3333 43.7161 45.1007 44.2778 44.6865 44.6919C44.2724 45.1061 43.7107 45.3387 43.125 45.3387H27.2912C26.835 46.6318 25.9889 47.7515 24.8696 48.5435C23.7503 49.3355 22.4128 49.7608 21.0417 49.7608C19.6705 49.7608 18.3331 49.3355 17.2137 48.5435C16.0944 47.7515 15.2483 46.6318 14.7921 45.3387H12.2083C11.6226 45.3387 11.0609 45.1061 10.6468 44.6919C10.2327 44.2778 10 43.7161 10 43.1304C10 42.5447 10.2327 41.983 10.6468 41.5689C11.0609 41.1547 11.6226 40.9221 12.2083 40.9221H14.7921Z" fill="black" />
                                </svg>
                                <p>Filter</p>
                            </div>
                            <div className="bar"></div>
                        </div>
                        <div className="category">
                            <div className="heading">
                                <p>By category</p>
                                <button>
                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3522 18.6558C10.5778 18.8762 10.8837 19 11.2026 19C11.5216 19 11.8275 18.8762 12.053 18.6558L18.0073 12.8373L23.9615 18.6558C24.1883 18.87 24.4922 18.9884 24.8076 18.9858C25.123 18.9831 25.4247 18.8595 25.6477 18.6415C25.8707 18.4236 25.9972 18.1288 26 17.8206C26.0027 17.5124 25.8815 17.2154 25.6623 16.9937L18.8577 10.3442C18.6321 10.1238 18.3262 10 18.0073 10C17.6883 10 17.3824 10.1238 17.1568 10.3442L10.3522 16.9937C10.1267 17.2142 10 17.5131 10 17.8248C10 18.1365 10.1267 18.4354 10.3522 18.6558Z" fill="#2F2F2F" />
                                    </svg>
                                </button>
                            </div>
                            <div className="categories">
                                <label>Editorials
                                    <input type="checkbox" />
                                    <span className="checkmark">
                                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.7713 10.8018L15.296 0.481049C15.5919 0.160349 15.9686 0 16.426 0C16.8834 0 17.2601 0.160349 17.5561 0.481049C17.852 0.801749 18 1.20991 18 1.70554C18 2.20117 17.852 2.60933 17.5561 2.93003L6.90134 14.4752C6.57847 14.8251 6.20179 15 5.7713 15C5.34081 15 4.96413 14.8251 4.64126 14.4752L0.443946 9.92711C0.147981 9.60641 0 9.19825 0 8.70262C0 8.207 0.147981 7.79883 0.443946 7.47813C0.73991 7.15743 1.11659 6.99708 1.57399 6.99708C2.03139 6.99708 2.40807 7.15743 2.70404 7.47813L5.7713 10.8018Z" fill="black" />
                                        </svg>
                                    </span>
                                </label>
                                <label>Fashion
                                    <input type="checkbox" />
                                    <span className="checkmark">
                                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.7713 10.8018L15.296 0.481049C15.5919 0.160349 15.9686 0 16.426 0C16.8834 0 17.2601 0.160349 17.5561 0.481049C17.852 0.801749 18 1.20991 18 1.70554C18 2.20117 17.852 2.60933 17.5561 2.93003L6.90134 14.4752C6.57847 14.8251 6.20179 15 5.7713 15C5.34081 15 4.96413 14.8251 4.64126 14.4752L0.443946 9.92711C0.147981 9.60641 0 9.19825 0 8.70262C0 8.207 0.147981 7.79883 0.443946 7.47813C0.73991 7.15743 1.11659 6.99708 1.57399 6.99708C2.03139 6.99708 2.40807 7.15743 2.70404 7.47813L5.7713 10.8018Z" fill="black" />
                                        </svg>
                                    </span>
                                </label>
                                <label>Optics
                                    <input type="checkbox" />
                                    <span className="checkmark">
                                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.7713 10.8018L15.296 0.481049C15.5919 0.160349 15.9686 0 16.426 0C16.8834 0 17.2601 0.160349 17.5561 0.481049C17.852 0.801749 18 1.20991 18 1.70554C18 2.20117 17.852 2.60933 17.5561 2.93003L6.90134 14.4752C6.57847 14.8251 6.20179 15 5.7713 15C5.34081 15 4.96413 14.8251 4.64126 14.4752L0.443946 9.92711C0.147981 9.60641 0 9.19825 0 8.70262C0 8.207 0.147981 7.79883 0.443946 7.47813C0.73991 7.15743 1.11659 6.99708 1.57399 6.99708C2.03139 6.99708 2.40807 7.15743 2.70404 7.47813L5.7713 10.8018Z" fill="black" />
                                        </svg>
                                    </span>
                                </label>
                                <label>Art & Museum
                                    <input type="checkbox" />
                                    <span className="checkmark">
                                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.7713 10.8018L15.296 0.481049C15.5919 0.160349 15.9686 0 16.426 0C16.8834 0 17.2601 0.160349 17.5561 0.481049C17.852 0.801749 18 1.20991 18 1.70554C18 2.20117 17.852 2.60933 17.5561 2.93003L6.90134 14.4752C6.57847 14.8251 6.20179 15 5.7713 15C5.34081 15 4.96413 14.8251 4.64126 14.4752L0.443946 9.92711C0.147981 9.60641 0 9.19825 0 8.70262C0 8.207 0.147981 7.79883 0.443946 7.47813C0.73991 7.15743 1.11659 6.99708 1.57399 6.99708C2.03139 6.99708 2.40807 7.15743 2.70404 7.47813L5.7713 10.8018Z" fill="black" />
                                        </svg>
                                    </span>
                                </label>
                                <label>Nature
                                    <input type="checkbox" />
                                    <span className="checkmark">
                                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.7713 10.8018L15.296 0.481049C15.5919 0.160349 15.9686 0 16.426 0C16.8834 0 17.2601 0.160349 17.5561 0.481049C17.852 0.801749 18 1.20991 18 1.70554C18 2.20117 17.852 2.60933 17.5561 2.93003L6.90134 14.4752C6.57847 14.8251 6.20179 15 5.7713 15C5.34081 15 4.96413 14.8251 4.64126 14.4752L0.443946 9.92711C0.147981 9.60641 0 9.19825 0 8.70262C0 8.207 0.147981 7.79883 0.443946 7.47813C0.73991 7.15743 1.11659 6.99708 1.57399 6.99708C2.03139 6.99708 2.40807 7.15743 2.70404 7.47813L5.7713 10.8018Z" fill="black" />
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="price">
                            <div className="heading">
                                <p>By price</p>
                                <button>
                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3522 18.6558C10.5778 18.8762 10.8837 19 11.2026 19C11.5216 19 11.8275 18.8762 12.053 18.6558L18.0073 12.8373L23.9615 18.6558C24.1883 18.87 24.4922 18.9884 24.8076 18.9858C25.123 18.9831 25.4247 18.8595 25.6477 18.6415C25.8707 18.4236 25.9972 18.1288 26 17.8206C26.0027 17.5124 25.8815 17.2154 25.6623 16.9937L18.8577 10.3442C18.6321 10.1238 18.3262 10 18.0073 10C17.6883 10 17.3824 10.1238 17.1568 10.3442L10.3522 16.9937C10.1267 17.2142 10 17.5131 10 17.8248C10 18.1365 10.1267 18.4354 10.3522 18.6558Z" fill="#2F2F2F" />
                                    </svg>
                                </button>
                            </div>

                            <span className="multi-range">
                                <input type="range" min="0" max="50" value="5" id="lower" />
                                <input type="range" min="0" max="50" value="45" id="upper" />
                            </span>
                        </div>
                        <div className="artist">
                            <div className="heading">
                                <p>By artist</p>
                                <button>
                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3522 18.6558C10.5778 18.8762 10.8837 19 11.2026 19C11.5216 19 11.8275 18.8762 12.053 18.6558L18.0073 12.8373L23.9615 18.6558C24.1883 18.87 24.4922 18.9884 24.8076 18.9858C25.123 18.9831 25.4247 18.8595 25.6477 18.6415C25.8707 18.4236 25.9972 18.1288 26 17.8206C26.0027 17.5124 25.8815 17.2154 25.6623 16.9937L18.8577 10.3442C18.6321 10.1238 18.3262 10 18.0073 10C17.6883 10 17.3824 10.1238 17.1568 10.3442L10.3522 16.9937C10.1267 17.2142 10 17.5131 10 17.8248C10 18.1365 10.1267 18.4354 10.3522 18.6558Z" fill="#2F2F2F" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <p>All</p>
                                <p>Below $100.00</p>
                                <p>$100.00 - $150.00</p>
                                <p>$150.00 - $200.00</p>
                                <p>Above $200.00</p>
                            </div>
                        </div>
                        <div className="year">
                            <div className="heading">
                                <p>Collection year</p>
                                <button>
                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3522 18.6558C10.5778 18.8762 10.8837 19 11.2026 19C11.5216 19 11.8275 18.8762 12.053 18.6558L18.0073 12.8373L23.9615 18.6558C24.1883 18.87 24.4922 18.9884 24.8076 18.9858C25.123 18.9831 25.4247 18.8595 25.6477 18.6415C25.8707 18.4236 25.9972 18.1288 26 17.8206C26.0027 17.5124 25.8815 17.2154 25.6623 16.9937L18.8577 10.3442C18.6321 10.1238 18.3262 10 18.0073 10C17.6883 10 17.3824 10.1238 17.1568 10.3442L10.3522 16.9937C10.1267 17.2142 10 17.5131 10 17.8248C10 18.1365 10.1267 18.4354 10.3522 18.6558Z" fill="#2F2F2F" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
                <main>
                    <div className="topbar">
                        <p>See 1-6 of 15 results</p>
                        <button>Sort by
                            <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3522 10.3442C10.5778 10.1238 10.8837 10 11.2026 10C11.5216 10 11.8275 10.1238 12.053 10.3442L18.0073 16.1627L23.9615 10.3442C24.1883 10.13 24.4922 10.0116 24.8076 10.0142C25.123 10.0169 25.4247 10.1405 25.6477 10.3585C25.8707 10.5764 25.9972 10.8712 26 11.1794C26.0027 11.4876 25.8815 11.7846 25.6623 12.0063L18.8577 18.6558C18.6321 18.8762 18.3262 19 18.0073 19C17.6883 19 17.3824 18.8762 17.1568 18.6558L10.3522 12.0063C10.1267 11.7858 10 11.4869 10 11.1752C10 10.8635 10.1267 10.5646 10.3522 10.3442Z" fill="#2F2F2F" />
                            </svg>
                        </button>
                    </div>
                    <div className="items">
                        {marketItems.map((item, index) => (
                            <Link to='/marketplace' key={index}>
                                <img src={item.image} alt="" />
                                <p className="title">{item.title}</p>
                                <p className="price">{item.dollar_price}</p>
                            </Link>
                        ))}
                    </div>
                    <button className="see-more">See more</button>
                </main>
            </div>
        </PageTransition>
    );
}

export default Marketplace;