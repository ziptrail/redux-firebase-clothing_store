import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../images/default/shoppingBag.svg'
import { CartContext } from '../../contexts/Cart';
import './CartIcon.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;