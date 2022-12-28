import { useState } from "react";
import '../styles/newsletter.scss'

const Newsletter = () => {
    const [email, setEmail] = useState('')

    return (
        <div className="newsletter-container">
            <div className="newsletter">
                <h2>NEWSLETTER</h2>
                <p>Subscribe to get daily updates on new drops & exciting deals</p>
                <form>
                    <input type="email" placeholder='ENTER YOUR EMAIL'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <button>SUSCRIBE</button>
                </form>
            </div>
        </div>
    );
}

export default Newsletter;