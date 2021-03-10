
export const SIGN_IN = "auth/SIGN_IN"
export const LOG_OUT = "auth/LOG_OUT"
export const SIGN_SUCCESS = "auth/SIGN_SUCCESS"

const initialState = {
    isLogin: false,
    encryptedToken:"ikgdhÚjgjgmfn°ghfgÛeidl",
    token:null
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_SUCCESS:
            return {...state,isLogin:true,token:action.token};
        case LOG_OUT:
            return {...state,isLogin:false}
        default:
            return state;
    }
}
export default authReducer;

export const signIn = (data)=>({type:SIGN_IN,data})
export const signSuccess = (token)=>({type:SIGN_SUCCESS,token})
export const logOut = ()=>({type:LOG_OUT})