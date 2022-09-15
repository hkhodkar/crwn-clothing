import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, siginINWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from '../form-input/FormInput'
import Button from "../button/Button";
import classes from './SignInForm.module.scss'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formField, setFormField] = useState(defaultFormFields);
    const { email, password } = formField;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    }

    const resetFormField = () => {
        setFormField(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await siginINWithEmailAndPassword(email, password)
            resetFormField();
        } catch (error) {
            debugger
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                alert('Invalid email or password')
            }
        }

    }

    return (
        <div className={classes['sign-up-container']}>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    required
                    label='Email'
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    required
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <div className={classes['button-container']}>
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType="google" onClick={signInWithGoogle}  >Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;