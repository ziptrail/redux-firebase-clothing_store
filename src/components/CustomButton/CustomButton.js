import './CustomButton.scss';

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const CustomButton = ({ children, buttonType, ...otherProps }) => {
    return (

        // Примечание: Google Provider в Firebase решил больше не использовать

        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;