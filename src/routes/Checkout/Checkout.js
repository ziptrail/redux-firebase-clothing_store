import { useContext } from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../contexts/Cart';
import './Checkout.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Товар</span>
                </div>
                <div className='header-block'>
                    <span>Описание</span>
                </div>
                <div className='header-block'>
                    <span>Количество</span>
                </div>
                <div className='header-block'>
                    <span>Цена</span>
                </div>
                <div className='header-block'>
                    <span>Убрать</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <span className='total'>Итого: {cartTotal} RUB</span>
        </div>
    )
}

export default Checkout;