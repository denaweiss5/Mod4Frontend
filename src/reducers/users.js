const users = (state=null, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                id: action.user.id,
                username: action.user.username
            }
        case 'LOGOUT_USER':
            return null
        case 'CREATE_USER':
            const updatedUsers = [...state, action.user]
            return updatedUsers
        default:
            return state
    }
}

export default users