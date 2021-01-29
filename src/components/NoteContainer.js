import React from 'react'
import NoteCard from './NoteCard'
import { connect } from 'react-redux'
import '../navbar.css';



class NoteContainer extends React.Component {
 
    componentDidMount(){
        if(!this.props.currentUser){
            this.props.history.push('/login')
        }
    }

  
    render(){
    
    return (
        <div className="main" id="notecontainer">
        {this.props.notes.map(note => {
            return <NoteCard note={note} key={note.id}/>
        })}
    </div>
    )
    }
    }

   

    const mapStateToProps = (state) => {
        return {
        notes: state.notes,
        currentUser: state.currentUser
        }
    }

export default connect(mapStateToProps)(NoteContainer)
