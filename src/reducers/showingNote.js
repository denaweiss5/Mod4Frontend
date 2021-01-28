const showingNote = (state= null, action) => {
    switch(action.type){
        case 'VIEW_NOTE':
            return action.note
        case 'DELETE_NOTE':
            return action.id
        default:
            return state
    }
}

export default showingNote