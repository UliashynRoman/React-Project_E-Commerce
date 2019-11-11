import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch,Route , Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up';
import {auth ,createUserProfileDocument } from './firebase/firebase.units';
import './App.css';

/* REDUX */
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class  App extends React.Component {
  

  unsubscribeFromAuth = null;
  
  //user is logged in until he log out
  componentDidMount(){
    const {setCurrentUser} = this.props;

    //open subscription
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      /* this.setState({currentUser: user}); */
      /* createUserProfileDocument(user); */
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //set to local
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }else{
        //we want update
        setCurrentUser(userAuth);
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return(
    <div>
      <Header />
      <Switch>{/* More Control under code */}
        <Route  exact path='/' component={HomePage} /> {/* this page for that path */}
        <Route  exact path='/shop' component={ShopPage} /> {/* this page for that path */}
        <Route path='/signin' render={()=> this.props.currentUser ? 
          (<Redirect to='/'/>) 
          : 
          (<SignInAndSignUp/>)}
        />
      </Switch>
    </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  //whatever you passing me , it could be action objec
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// first position - acces to current user, second - setting up currn
export default connect(mapStateToProps,mapDispatchToProps)(App);
