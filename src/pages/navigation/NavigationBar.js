import { useSelector } from "react-redux"
import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import { CartContext } from "../../contexts/CartContext"
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { selectCurrentUser } from "../../store/user/user.selector"

import classes from './NavigationBar.module.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIcon from '../../components/cart-icon/CartIcon'
import CardDropdown from "../../components/cart-dropdown/CartDropdown"

const NavigationBar = props => {


    const currentUser = useSelector(selectCurrentUser)
    const { isCartOpen } = useContext(CartContext)

    const signOutHandle = async () => {
        await signOutUser();
    }
    return (
        <Fragment>
            <div className={classes.navigation}>
                <div className={classes['logo-container']} >
                    <Link to="/">
                        <Logo className={classes.logo} />
                    </Link>
                </div>
                <div className={classes['nav-links-container']}>
                    <Link className={classes['nav-link']} to='/shop'>SHOP</Link>
                    {
                        currentUser ?
                            (
                                <Fragment>
                                    <span className={classes['nav-link']} onClick={signOutHandle}>SIGN OUT</span>

                                </Fragment>
                            )
                            :
                            (<Link className={classes['nav-link']} to='/auth'>SIGN IN</Link>)
                    }

                    <CartIcon />
                </div>
                {isCartOpen && <CardDropdown />}
            </div>
            <Outlet />
        </Fragment >
    )
}

export default NavigationBar