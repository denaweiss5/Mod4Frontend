import React from 'react'
import { connect } from 'react-redux'
import { deleteNote, updateNote }from '../actions/notes'
import { Link } from 'react-router-dom';

class ViewNote extends React.Component {

handleDelete = () => {
    
    const { id } = this.props.showingNote
    fetch(`http://localhost:3000/notes/${id}`, {
        method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
        this.props.deleteNote(id)
        this.props.history.push('/notes')
    })
}
  
  

 render(){
    const date = new Date(this.props.showingNote.created_at).toDateString()
    const time = new Date(this.props.showingNote.created_at).toLocaleTimeString()

    return (
    <div className="view-notecard">
        <h2>{this.props.showingNote.title}</h2>
        <h4>{this.props.showingNote.content}</h4>
        <h6>Created On: {date}</h6>
        <div className="view-btns">
            <Link className="back-btn" to="/notes">Back to All Notes</Link>
            <br></br>
            <Link className="edit-btn" to={`/notes/edit/${this.props.showingNote.id}`} onClick={()=>this.props.updateNote(this.props.showingNote)}>Edit</Link>
            <br></br>
            <div className="delete-btn" onClick={() => this.handleDelete(this.props.showingNote.id)}>Delete</div>
        </div>
    </div>
   )
 }
}

const mapStateToProps = (state) => {
    return {
        showingNote: state.showingNote,
    }
}

const mapDispatchToProps = {
    deleteNote: deleteNote,
    updateNote: updateNote
  }

export default connect(mapStateToProps, mapDispatchToProps)(ViewNote);