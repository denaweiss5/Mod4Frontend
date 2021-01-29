import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteNote, viewNote, updateNote }from '../actions/notes'


class NoteCard extends React.Component {



 render(){

    const { id } = this.props.note
    const { note } = this.props

  
   

   return (
    
   <div className="main" id="notecard">
    <div className="notecard-btns">
    <Link className="edit-btn" to={`/notes/edit/${id}`} onClick={()=>this.props.updateNote(this.props.note)}>Edit</Link>
    <br></br>
    <Link className="view-btn" to={`/notes/${id}`} onClick={()=>this.props.viewNote(this.props.note)}>View</Link>
    </div>
    <br></br>
    <h3 className="card-title">{this.props.note.title}</h3>
    <h5 className="card-content">{this.props.note.content}</h5>
   </div>
 
   )
   }
 }


const mapDispatchToProps = {
    deleteNote: deleteNote,
    viewNote: viewNote,
    updateNote: updateNote
  }

export default connect(null, mapDispatchToProps)(NoteCard);