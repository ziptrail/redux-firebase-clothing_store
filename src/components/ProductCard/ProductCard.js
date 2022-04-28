import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import CustomButton from '../CustomButton/CustomButton';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton buttonType='inverted' onClick={addProductToCart}>Добавить в корзину</CustomButton>
        </div>
    )
}

export default ProductCard;