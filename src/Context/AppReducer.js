export const initialState = {
    users: []
};

const reducer = (state, action) => {
    switch (action.type) {  //switch like if condition
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
                
            }

        case 'ADD_USER':
            console.log("action.payload", ...state.users)
            return {
                users: [action.payload, ...state.users]
            }
        case 'EDIT_USER':
            const updateUser = action.payload;

            const updateUsers = state.users.map(user => {
                if (user.id === updateUsers.id) {
                    return updateUser;
                }
                return user;
            })

            return {
                users: updateUsers
            }

        default:
            return state
    }
}

export default reducer;