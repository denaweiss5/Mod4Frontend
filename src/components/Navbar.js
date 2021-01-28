import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/auth'


class Navbar extends React.Component{

handleClick = () => {
    this.props.logoutUser()
}

render(){
return (
 
<nav className="navbar">
   {
    this.props.currentUser ? 
    <nav className="navbar">
    <Link className="navbar__link" to="/notes">
      FlatNote
    </Link>
    <Link className="navbar__link" to="/notes/new">
      New Note
    </Link>
    
    <Link className="navbar__link" to="/login" onClick={this.handleClick}>    
    Sign Out
    </Link>
    </nav>
    :
  <nav className="navbar">
    <Link className="navbar__link" to="/login">    
    Login
    </Link> 
   <Link className="navbar__link" to="/register">    
   Sign Up
   </Link> 
  </nav>
    }
</nav>

)
}
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = {
    logoutUser: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
