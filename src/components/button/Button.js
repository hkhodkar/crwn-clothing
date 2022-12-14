
import classes from './Button.module.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherprops }) => {
    return (
        <button  {...otherprops} className={`${classes['button-container']} ${classes[`${BUTTON_TYPE_CLASSES[buttonType]}`]}`}>{children}</button>
    )
}

export default Button;

