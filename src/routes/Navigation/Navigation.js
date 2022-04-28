import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../images/default/logo.png";
import CartIcon from "../../components/CartIcon/CartIcon";
import Dropdown from "../../components/Dropdown/Dropdown";
import { CartContext } from "../../contexts/Cart";
import { UserContext } from "../../contexts/User";
import { signOutUser } from "../../firebase/firebase-config";
import './Navigation.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img src={Logo} alt="" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        КАТАЛОГ ТОВАРОВ
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>ВЫЙТИ</span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                ВОЙТИ
                            </Link>
                        )}
                    <CartIcon />
                </div>
                {isCartOpen && <Dropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;