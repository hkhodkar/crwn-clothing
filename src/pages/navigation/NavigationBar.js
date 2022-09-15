import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import classes from './NavigationBar.module.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'


const NavigationBar = props => {
    return (
        <Fragment>
            <div className={classes.navigation}>
                <div className={classes['logo-container']} >
                    <Link to="/">
                        <Logo className={classes.logo} />
                    </Link>
                </div>
                <div className={classes['nav-links-container']}>
                    <Link className={classes['nav-link']} to='/shop'>Shop</Link>
                    <Link className={classes['nav-link']} to='/sign-in'>Sign in</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar