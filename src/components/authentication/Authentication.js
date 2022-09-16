
import classes from './Authentication.module.scss'
import SignUpForm from '../sign-up-form/SignUpForm';
import SignIn from '../sign-in-form/SignInForm';

const Authentication = () => {



    return (
        <div className={classes['authentication-container']}>
            <SignIn />
            <SignUpForm />
        </div>
    )
}
export default Authentication;