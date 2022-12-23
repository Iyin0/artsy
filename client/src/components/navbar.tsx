import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/navbar.scss'
import { motion } from "framer-motion";

const Navbar = () => {

    enum Routes {
        HOME = '/',
        MARKETPLACE = '/marketplace',
        AUCTIONS = '/auctions',
        DROP = '/drop'
    }

    const location = useLocation()
    const navRoutes = useRef<HTMLDivElement>(null!)
    const [toggleSideNav, setToggleSideNav] = useState(false)

    useEffect(() => {
        setToggleSideNav(false)
    }, [location.pathname])

    useEffect(() => {
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
    }, [navRoutes, location.pathname])



    return (
        <nav>
            <button className="hamburger" onClick={() => setToggleSideNav(!toggleSideNav)}>
                <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 24.5H29.0312M10 17.25H29.0312M10 10H29.0312" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className="nav-name">
                <Link to='/'>ARTSY.</Link>
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
                        <path d="M18.9 38.5C18.0556 38.5 17.3333 38.1433 16.7333 37.4298C16.1333 36.7173 15.8333 35.8685 15.8333 34.8833V20.4556L13.4 13.6111H10.5V10.5H15.2L17.4 16.7222H37.1C37.6111 16.7222 38 16.9685 38.2667 17.4611C38.5333 17.9537 38.5444 18.4593 38.3 18.9778L34.5 27.65C35.6333 27.8574 36.5836 28.4667 37.3507 29.4778C38.1169 30.4889 38.5 31.6815 38.5 33.0556C38.5 34.5593 38.0502 35.8426 37.1507 36.9056C36.2502 37.9685 35.1556 38.5 33.8667 38.5C32.5556 38.5 31.4502 37.9685 30.5507 36.9056C29.6502 35.8426 29.2 34.5593 29.2 33.0556C29.2 32.537 29.2556 32.0574 29.3667 31.6167C29.4778 31.1759 29.6333 30.7481 29.8333 30.3333L25.4667 29.8667L21.4667 36.8667C21.1778 37.3852 20.8053 37.787 20.3493 38.0722C19.8942 38.3574 19.4111 38.5 18.9 38.5ZM31.6333 27.4167L34.9333 19.8333L18.5 19.8722L20.1667 24.5C20.3444 25.0185 20.628 25.4525 21.0173 25.802C21.4058 26.1525 21.8556 26.3537 22.3667 26.4056L31.6333 27.4167ZM18.9333 35.35C18.9778 35.35 19.0778 35.2852 19.2333 35.1556L22.4667 29.5556C21.3778 29.4259 20.5222 29.121 19.9 28.6409C19.2778 28.1618 18.8111 27.663 18.5 27.1444V34.9222C18.5 35.0519 18.5444 35.1556 18.6333 35.2333C18.7222 35.3111 18.8222 35.35 18.9333 35.35ZM33.8333 35.3889C34.4111 35.3889 34.8889 35.1618 35.2667 34.7076C35.6444 34.2544 35.8333 33.7037 35.8333 33.0556C35.8333 32.3815 35.6444 31.8241 35.2667 31.3833C34.8889 30.9426 34.4111 30.7222 33.8333 30.7222C33.2778 30.7222 32.8058 30.9426 32.4173 31.3833C32.028 31.8241 31.8333 32.3815 31.8333 33.0556C31.8333 33.7037 32.028 34.2544 32.4173 34.7076C32.8058 35.1618 33.2778 35.3889 33.8333 35.3889ZM31.6333 27.4167L22.3667 26.4056L31.6333 27.4167Z" fill="#333333" />
                    </svg>
                </button>
                <button>
                    <svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.707 28.293L33 25.586V22C32.9969 19.5218 32.075 17.1328 30.4126 15.295C28.7502 13.4571 26.4654 12.3009 24 12.05V10H22V12.05C19.5346 12.3009 17.2498 13.4571 15.5874 15.295C13.925 17.1328 13.0031 19.5218 13 22V25.586L10.293 28.293C10.1055 28.4805 10.0001 28.7348 10 29V32C10 32.2652 10.1054 32.5196 10.2929 32.7071C10.4804 32.8946 10.7348 33 11 33H18V33.777C17.9782 35.0456 18.4254 36.2777 19.2558 37.237C20.0862 38.1964 21.2414 38.8156 22.5 38.976C23.1952 39.0449 23.8971 38.9676 24.5606 38.749C25.2241 38.5304 25.8345 38.1753 26.3525 37.7066C26.8706 37.2379 27.2848 36.666 27.5685 36.0277C27.8522 35.3893 27.9992 34.6986 28 34V33H35C35.2652 33 35.5196 32.8946 35.7071 32.7071C35.8946 32.5196 36 32.2652 36 32V29C35.9999 28.7348 35.8946 28.4805 35.707 28.293ZM26 34C26 34.7956 25.6839 35.5587 25.1213 36.1213C24.5587 36.6839 23.7956 37 23 37C22.2044 37 21.4413 36.6839 20.8787 36.1213C20.3161 35.5587 20 34.7956 20 34V33H26V34ZM34 31H12V29.414L14.707 26.707C14.8945 26.5195 14.9999 26.2652 15 26V22C15 19.8783 15.8429 17.8434 17.3431 16.3431C18.8434 14.8429 20.8783 14 23 14C25.1217 14 27.1566 14.8429 28.6569 16.3431C30.1571 17.8434 31 19.8783 31 22V26C31.0001 26.2652 31.1054 26.5195 31.293 26.707L34 29.414V31Z" fill="#333333" />
                    </svg>
                </button>
            </div>
            {toggleSideNav &&
                <motion.div className="sideNav"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="left">
                        <div className="top">
                            <Link to='/'>ARTSY.</Link>
                            <button onClick={() => setToggleSideNav(false)}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.317668 1.85151C0.216955 1.75079 0.137065 1.63123 0.0825594 1.49964C0.0280538 1.36805 1.06119e-09 1.22702 0 1.08459C-1.06119e-09 0.942158 0.0280538 0.801122 0.0825594 0.669534C0.137065 0.537946 0.216955 0.418381 0.317668 0.317668C0.418381 0.216955 0.537946 0.137065 0.669534 0.0825594C0.801122 0.0280538 0.942158 -1.06119e-09 1.08459 0C1.22702 1.06119e-09 1.36805 0.0280538 1.49964 0.0825594C1.63123 0.137065 1.75079 0.216955 1.85151 0.317668L13 11.4683L24.1485 0.317668C24.2492 0.216955 24.3688 0.137065 24.5004 0.0825594C24.6319 0.0280538 24.773 0 24.9154 0C25.0578 0 25.1989 0.0280538 25.3305 0.0825594C25.4621 0.137065 25.5816 0.216955 25.6823 0.317668C25.783 0.418381 25.8629 0.537946 25.9174 0.669534C25.9719 0.801122 26 0.942158 26 1.08459C26 1.22702 25.9719 1.36805 25.9174 1.49964C25.8629 1.63123 25.783 1.75079 25.6823 1.85151L14.5317 13L25.6823 24.1485C25.783 24.2492 25.8629 24.3688 25.9174 24.5004C25.9719 24.6319 26 24.773 26 24.9154C26 25.0578 25.9719 25.1989 25.9174 25.3305C25.8629 25.4621 25.783 25.5816 25.6823 25.6823C25.5816 25.783 25.4621 25.8629 25.3305 25.9174C25.1989 25.9719 25.0578 26 24.9154 26C24.773 26 24.6319 25.9719 24.5004 25.9174C24.3688 25.8629 24.2492 25.783 24.1485 25.6823L13 14.5317L1.85151 25.6823C1.75079 25.783 1.63123 25.8629 1.49964 25.9174C1.36805 25.9719 1.22702 26 1.08459 26C0.942158 26 0.801122 25.9719 0.669534 25.9174C0.537946 25.8629 0.418381 25.783 0.317668 25.6823C0.216955 25.5816 0.137065 25.4621 0.0825594 25.3305C0.0280538 25.1989 0 25.0578 0 24.9154C0 24.773 0.0280538 24.6319 0.0825594 24.5004C0.137065 24.3688 0.216955 24.2492 0.317668 24.1485L11.4683 13L0.317668 1.85151Z" fill="#333333" />
                                </svg>
                            </button>
                        </div>
                        <div className="routes">
                            <Link to={Routes.HOME}>Home</Link>
                            <Link to={Routes.MARKETPLACE}>Marketplace</Link>
                            <Link to={Routes.AUCTIONS}>Auctions</Link>
                            <Link to={Routes.DROP}>Drop</Link>
                        </div>
                        <button className="contact">
                            <svg width="86" height="87" viewBox="0 0 86 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_510_155)">
                                    <circle cx="43" cy="40" r="32" fill="#3341C1" />
                                </g>
                                <path d="M28 55V28.9C28 28.1025 28.2842 27.4195 28.8526 26.8511C29.42 26.2837 30.1025 26 30.9 26H54.1C54.8975 26 55.5805 26.2837 56.1489 26.8511C56.7163 27.4195 57 28.1025 57 28.9V46.3C57 47.0975 56.7163 47.7805 56.1489 48.3489C55.5805 48.9163 54.8975 49.2 54.1 49.2H33.8L28 55Z" fill="white" />
                                <defs>
                                    <filter id="filter0_d_510_155" x="0.333333" y="0.888889" width="85.3333" height="85.3333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3.55556" />
                                        <feGaussianBlur stdDeviation="5.33333" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_510_155" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_510_155" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="right" onClick={() => setToggleSideNav(false)}></div>
                </motion.div>}
        </nav>
    );
}

export default Navbar;