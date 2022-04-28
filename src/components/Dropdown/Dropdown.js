import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../contexts/Cart';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import './Dropdown.scss';

const Dropdown = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <CustomButton onClick={checkoutHandler}>Оформление заказа</CustomButton>
        </div>
    )
}

export default Dropdown;