import React from 'react'
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/auth'

class Login extends React.Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

componentDidMount(){
    if(!this.props.currentUser){
        this.props.history.push('/login')
    }
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
        body:  JSON.stringify(this.state)
    }
    fetch("http://localhost:3000/auth", reqObj)
    .then(resp => resp.json())
    .then(data => {
        if (data.error){
            this.setState({
                error: data.error
            })
        } else {
            
            this.props.loginSuccess(data)
            this.props.history.push('/notes')
        }
    })
}

 render(){
   return (
   <div>
       { this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
       <form onSubmit={this.handleSubmit} className="login-form">
           <p>Member Login</p>
           <input type="text" name='username' placeholder="username" value={this.state.username} onChange={this.handleChange}/>
           <br></br>
           <input type="text" name='password' placeholder="password" value={this.state.password} onChange={this.handleChange}/>
           <br></br>
           <input type="submit" value="Login" id="login-btn"/>
       </form>
   </div>
   )
 }
}

const mapDispatchToProps = {
    loginSuccess: loginSuccess
}

export default connect(null, mapDispatchToProps)(Login);