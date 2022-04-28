import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signInAuthUserWithEmailAndPassword } from "../../firebase/firebase-config";
import CustomButton from '../CustomButton/CustomButton';
import FormInput from "../FormInput/FormInput";
import './SignIn.scss';


// Аунтентификация пользователя

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            alert(`Добро пожаловать! ${user._tokenResponse.email}`);
            navigate('/');
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Неверная электронная почта или пароль');
                    break;
                case 'auth/user-not-found':
                    alert('Нет пользователя, связанного с этой электронной почтой');
                    break;
                default:
                    console.log(error)
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className="sign-up-container">
            <h2>У вас уже есть учетная запись?</h2>
            <span>Войдите с помощью системы</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="btn-container">
                    <CustomButton type="submit">Войти</CustomButton>
                </div>

            </form>
        </div>
    )
}

export default SignIn;