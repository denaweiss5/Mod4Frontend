const editNote = (state= null, action) => {
    switch(action.type){
        case 'UPDATE_NOTE':
            return action.note
        default:
            return state
    }
}

export default editNote