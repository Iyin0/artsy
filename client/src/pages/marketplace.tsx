import PageTransition from "../components/pageTransition";
import marketItems from "../data/marketItems";

const Marketplace = () => {
    return (
        <PageTransition>
            <div className="marketplace">
                <aside>
                    <div className="search">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.9741 33.947C24.6309 33.9464 27.211 33.0571 29.3038 31.4206L35.8836 38L38 35.8837L31.4202 29.3043C33.0577 27.2114 33.9476 24.6308 33.9483 21.9735C33.9483 15.3716 28.5764 10 21.9741 10C15.3719 10 10 15.3716 10 21.9735C10 28.5754 15.3719 33.947 21.9741 33.947ZM21.9741 12.9934C26.9269 12.9934 30.9547 17.021 30.9547 21.9735C30.9547 26.926 26.9269 30.9536 21.9741 30.9536C17.0213 30.9536 12.9935 26.926 12.9935 21.9735C12.9935 17.021 17.0213 12.9934 21.9741 12.9934Z" fill="#999999" />
                        </svg>
                        <input type="search" placeholder="Search" />
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
                            <div key={index}>
                                <img src={item.image} alt="" />
                                <p className="title">{item.title}</p>
                                <p className="price">{item.dollar_price}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </PageTransition>
    );
}

export default Marketplace;