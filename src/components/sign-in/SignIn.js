import { Fragment } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }
    return (
        <Fragment>
            <div>Sign In Page</div>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </Fragment>
    )
}
export default SignIn;