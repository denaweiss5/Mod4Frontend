import { createNote } from '../actions/notes'
import '../navbar.css';
import React from 'react'
import { connect } from 'react-redux'


class Form  extends React.Component {
  state = {
    title: '',
    content: ''
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
    fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        user_id: this.props.currentUser.id
      })
    })
    .then(resp => resp.json())
    .then(newNote => {
      this.setState({
        title: '',
        content: ''
      })
      this.props.createNote(newNote)
      this.props.history.push('/notes')
    })
    
  }


  render(){
    return (
      <div >
        <form className="new-form">
          <p >Title</p>
          <input type='input' name='title' onChange={this.handleChange} value={this.state.title} />
          <p >Content</p>
          <textarea type='input'  name='content' onChange={this.handleChange} value={this.state.content} />
          <br></br>
          <input type="submit" value="Submit" id="new-btn" onClick={this.handleSubmit}/>
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
  createNote: createNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)