import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import classes from './NavigationBar.module.scss'
import { UserContext } from "../../contexts/UserContext"
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'


const NavigationBar = props => {
    const { currentUser } = useContext(UserContext)

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
                            (<span className={classes['nav-link']} onClick={signOutHandle}>SIGN OUT</span>)
                            :
                            (<Link className={classes['nav-link']} to='/auth'>SIGN IN</Link>)
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar