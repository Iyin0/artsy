import { Link } from 'react-router-dom';
import '../styles/cartHeader.scss'

const CartHeader = () => {
    return (
        <header className="cartHeader">
            <div>
                <Link to='/marketplace/cart'>Shopping Cart</Link>
                <Link to='/marketplace/cart'>Shipping details</Link>
                <Link to='/marketplace/cart'>Payment details</Link>
            </div>
        </header>
    );
}

export default CartHeader;