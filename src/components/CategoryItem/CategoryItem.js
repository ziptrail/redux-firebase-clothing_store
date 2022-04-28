import { Link } from "react-router-dom";
import './CategoryItem.scss';

const CategoryItem = ({ category }) => {
    const {imageUrl, title} = category;
    return (
        <div className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            />
            <Link className="category-body-container" to="/shop">
                <h2>{title}</h2>
            </Link>
        </div>
    )
}

export default CategoryItem;