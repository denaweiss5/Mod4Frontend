import { createUser } from '../actions/users'
import { connect } from 'react-redux';
import '../navbar.css';
import React from 'react'


class Register  extends React.Component {
  state = {
    username: '',
    password: '',
    error: ''
  }



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch("http://localhost:3000/users", reqObj)
    .then(resp => resp.json())
    .then( newUser => {
        if (newUser.error){
            this.setState({
                error: newUser.error
            })
        } else {
            this.props.createUser(newUser)
            this.props.history.push('/notes/new')
        
        }
    })
  }
    
  render(){
    return (
      <div >
        { this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
        <form className="submit-form">
            <p>Register</p>
            <input  placeholder=" username" type='input' name='username' onChange={this.handleChange} value={this.state.username} />
            <br></br>
            <input placeholder=" password" type='password'  name='password' onChange={this.handleChange} value={this.state.password} />
            <br></br>
            <input value="Create Account" id="form-submit" type='submit' onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser
  }
}
const mapDispatchToProps = {
  createUser: createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)