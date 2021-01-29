import { combineReducers } from 'redux'
import notesReducer from './notes'
import currentUserReducer from './users'
import showingNoteReducer from './showingNote'
import editNoteReducer from './editNote'



export default combineReducers({
  notes: notesReducer,
  currentUser: currentUserReducer,
  showingNote: showingNoteReducer,
  editNote: editNoteReducer
})