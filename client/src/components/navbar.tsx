import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/navbar.scss'

const Navbar = () => {

    enum Routes {
        HOME = '/',
        MARKETPLACE = '/marketplace',
        AUCTIONS = '/auctions',
        DROP = '/drop'
    }

    const location = useLocation()
    const navRoutes = useRef<HTMLDivElement>(null)

    if (navRoutes.current) {
        Array.from(navRoutes.current.children).forEach((child) => {
            child.classList.remove("nav-underline")

            if (location.pathname === '/' || location.pathname.includes('/home')) {
                if (child.id === 'home') {
                    child.classList.add("nav-underline")
                }
            }
            else if (location.pathname.includes('/marketplace')) {
                if (child.id === 'marketplace') {
                    child.classList.add("nav-underline")
                }
            }
            else if (location.pathname.includes('/auctions')) {
                if (child.id === 'auctions') {
                    child.classList.add("nav-underline")
                }
            }
            else if (location.pathname.includes('/drop')) {
                if (child.id === 'drop') {
                    child.classList.add("nav-underline")
                }
            }
        })
    }

    return (
        <nav>
            <div className="nav-name">
                <h1>ARTSY.</h1>
            </div>
            <div className="nav-routes" ref={navRoutes}>
                <div id="home">
                    <Link to={Routes.HOME}>Home</Link>
                </div>
                <div id="marketplace">
                    <Link to={Routes.MARKETPLACE}>Marketplace</Link>
                </div>
                <div id="auctions">
                    <Link to={Routes.AUCTIONS}>Auctions</Link>
                </div>
                <div id="drop">
                    <Link to={Routes.DROP}>Drop</Link>
                </div>

            </div>
            <div className="nav-icons">
                <button>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9741 33.947C24.6309 33.9464 27.211 33.0571 29.3038 31.4206L35.8836 38L38 35.8837L31.4202 29.3043C33.0577 27.2114 33.9476 24.6308 33.9483 21.9735C33.9483 15.3716 28.5764 10 21.9741 10C15.3719 10 10 15.3716 10 21.9735C10 28.5754 15.3719 33.947 21.9741 33.947ZM21.9741 12.9934C26.9269 12.9934 30.9547 17.021 30.9547 21.9735C30.9547 26.926 26.9269 30.9536 21.9741 30.9536C17.0213 30.9536 12.9935 26.926 12.9935 21.9735C12.9935 17.021 17.0213 12.9934 21.9741 12.9934Z" fill="#333333" />
                    </svg>
                </button>
                <button>
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="41.5" cy="12.5" r="2.5" fill="#E31616" />
                        <path d="M18.9 38.5C18.0556 38.5 17.3333 38.1433 16.7333 37.4298C16.1333 36.7173 15.8333 35.8685 15.8333 34.8833V20.4556L13.4 13.6111H10.5V10.5H15.2L17.4 16.7222H37.1C37.6111 16.7222 38 16.9685 38.2667 17.4611C38.5333 17.9537 38.5444 18.4593 38.3 18.9778L34.5 27.65C35.6333 27.8574 36.5836 28.4667 37.3507 29.4778C38.1169 30.4889 38.5 31.6815 38.5 33.0556C38.5 34.5593 38.0502 35.8426 37.1507 36.9056C36.2502 37.9685 35.1556 38.5 33.8667 38.5C32.5556 38.5 31.4502 37.9685 30.5507 36.9056C29.6502 35.8426 29.2 34.5593 29.2 33.0556C29.2 32.537 29.2556 32.0574 29.3667 31.6167C29.4778 31.1759 29.6333 30.7481 29.8333 30.3333L25.4667 29.8667L21.4667 36.8667C21.1778 37.3852 20.8053 37.787 20.3493 38.0722C19.8942 38.3574 19.4111 38.5 18.9 38.5ZM31.6333 27.4167L34.9333 19.8333L18.5 19.8722L20.1667 24.5C20.3444 25.0185 20.628 25.4525 21.0173 25.802C21.4058 26.1525 21.8556 26.3537 22.3667 26.4056L31.6333 27.4167ZM18.9333 35.35C18.9778 35.35 19.0778 35.2852 19.2333 35.1556L22.4667 29.5556C21.3778 29.4259 20.5222 29.121 19.9 28.6409C19.2778 28.1618 18.8111 27.663 18.5 27.1444V34.9222C18.5 35.0519 18.5444 35.1556 18.6333 35.2333C18.7222 35.3111 18.8222 35.35 18.9333 35.35ZM33.8333 35.3889C34.4111 35.3889 34.8889 35.1618 35.2667 34.7076C35.6444 34.2544 35.8333 33.7037 35.8333 33.0556C35.8333 32.3815 35.6444 31.8241 35.2667 31.3833C34.8889 30.9426 34.4111 30.7222 33.8333 30.7222C33.2778 30.7222 32.8058 30.9426 32.4173 31.3833C32.028 31.8241 31.8333 32.3815 31.8333 33.0556C31.8333 33.7037 32.028 34.2544 32.4173 34.7076C32.8058 35.1618 33.2778 35.3889 33.8333 35.3889ZM31.6333 27.4167L22.3667 26.4056L31.6333 27.4167Z" fill="#333333" />
                    </svg>
                </button>
                <button>
                    <svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.707 28.293L33 25.586V22C32.9969 19.5218 32.075 17.1328 30.4126 15.295C28.7502 13.4571 26.4654 12.3009 24 12.05V10H22V12.05C19.5346 12.3009 17.2498 13.4571 15.5874 15.295C13.925 17.1328 13.0031 19.5218 13 22V25.586L10.293 28.293C10.1055 28.4805 10.0001 28.7348 10 29V32C10 32.2652 10.1054 32.5196 10.2929 32.7071C10.4804 32.8946 10.7348 33 11 33H18V33.777C17.9782 35.0456 18.4254 36.2777 19.2558 37.237C20.0862 38.1964 21.2414 38.8156 22.5 38.976C23.1952 39.0449 23.8971 38.9676 24.5606 38.749C25.2241 38.5304 25.8345 38.1753 26.3525 37.7066C26.8706 37.2379 27.2848 36.666 27.5685 36.0277C27.8522 35.3893 27.9992 34.6986 28 34V33H35C35.2652 33 35.5196 32.8946 35.7071 32.7071C35.8946 32.5196 36 32.2652 36 32V29C35.9999 28.7348 35.8946 28.4805 35.707 28.293ZM26 34C26 34.7956 25.6839 35.5587 25.1213 36.1213C24.5587 36.6839 23.7956 37 23 37C22.2044 37 21.4413 36.6839 20.8787 36.1213C20.3161 35.5587 20 34.7956 20 34V33H26V34ZM34 31H12V29.414L14.707 26.707C14.8945 26.5195 14.9999 26.2652 15 26V22C15 19.8783 15.8429 17.8434 17.3431 16.3431C18.8434 14.8429 20.8783 14 23 14C25.1217 14 27.1566 14.8429 28.6569 16.3431C30.1571 17.8434 31 19.8783 31 22V26C31.0001 26.2652 31.1054 26.5195 31.293 26.707L34 29.414V31Z" fill="#333333" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;