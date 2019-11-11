import React from 'react';
import './header.styles.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.units';
import CartIcon from '../cart-icon/cart-icon.component';
/*Icon Component*/

import CartDropdown from '../cart-dropdown/cart-dropdown';


/* REDUX */
import {connect} from 'react-redux';


const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="log"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {
                //condition var ? true : false
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
            {console.log(currentUser)}
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    // currentUser: state.user.currentUser
    currentUser,
    hidden
})

/* first that alows us to acces to state */
export default connect(mapStateToProps)(Header);