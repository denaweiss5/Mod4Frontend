
import '../navbar.css';
import React from 'react'
import { connect } from 'react-redux'
import { updateNoteSuccess } from '../actions/notes'

class EditForm extends React.Component {

constructor(props){
  super(props)
  this.state = {

    title: props.editNote.title ,
    content: props.editNote.content
  }
}

  
componentDidMount(){
  if(!this.props.currentUser){
      this.props.history.push('/login')
  if()
  /// check if editNote empty, if it is then grab from back end from the url and then update state with form
  }
}

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  handleSubmit = (e) => {
    const  id  = this.props.match.params.id
    e.preventDefault()
   
    console.log(e)
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
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
    .then(updatedNote => {
      this.props.updateNoteSuccess(updatedNote)
    
      this.props.history.push('/notes')
    })
    
  }


  render(){
    console.log(this.props)
    
    return (
      <div >
        <form className="new-form" onSubmit={this.handleSubmit}>
          <p>Title</p>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
          <p >Content</p>
          <textarea type='input' name='content' value={this.state.content} onChange={this.handleChange}/>
          <br></br>
          <input id="new-btn" type='submit' value="Update"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        currentUser: state.currentUser,
        editNote: state.editNote
    }
}
const mapDispatchToProps = {
  updateNoteSuccess: updateNoteSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)