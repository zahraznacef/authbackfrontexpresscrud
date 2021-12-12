
const statez = {
    token : {
        message : "",
    },
    authentication : false,
    authenticating : false,
    loading : false,
};


export const registerReducer = (state = statez, action) => {
    const {type, payload } = action;
    switch (type) {
        
        case "USER_REGISTER_REQUEST":
            state = {
                ...state,
                loading : true
            };
            break
        
        case "REGISTER_SUCCED" :
            return {
                ...state,
                token : [...state.token, payload.message],authentication : true,
            };
        
        case "USER_REGISTER_FAILED" :
            state = {
                ...state,
                loading : false,
                error : action.payload.error,
            };
            break 
    }
    return state;
};