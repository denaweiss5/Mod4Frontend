const notes = (state = [], action) => {
    let updatedNotes;
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.notes
        case 'CREATE_NOTE':
            updatedNotes = [...state, action.note]
            return updatedNotes
        case 'DELETE_NOTE':
            updatedNotes = state.filter(note => note.id !== action.id)
            return updatedNotes
        case 'UPDATE_NOTE_SUCCESS':
            updatedNotes = state.map(note => {
                if(note.id === action.note.id){
                    return action.note
                } else {
                    return note
                }
            })
            return updatedNotes
            
        
        default:
            return state
    }
}

export default notes