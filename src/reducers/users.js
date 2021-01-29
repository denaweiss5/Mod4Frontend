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
            return {
                id: action.user.id,
                username: action.user.username
            }
        default:
            return state
    }
}

export default users