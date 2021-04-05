export const LoginReducer = (state, action) => {

    switch(action.type){
            case "LOGGEDIN":
                    return {...state, payload: action.loggedIn}
                case "LOGGEDOUT":
                        return {...state, payload: action.loggedIn}
            default:
            return [...state];
    }
 
 }