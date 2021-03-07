
export const SIGN_IN = "auth/SIGN_IN"
// export const SET_IS_LOGIN = "auth/SET_IS_LOGIN"
// const SET_AUTH_DATA = "auth/SET_AUTH_DATA";
// const CLEAR_DATA = "auth/CLEAR_DATA_AUTH"
// const GET_CAPTCHA_SUCCESS = "auth/GET_CAPTCHA_SUCCESS"

const initialState = {
    id: null, 
    email: null, 
    login: null,
    isLogin: false,
    captchaUrl: null,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_IS_LOGIN:
        //     return {...state,isLogin:!state.isLogin}
        // case SET_AUTH_DATA:
        //     return { ...state, ...action.data, isLogin: action.isLogin }
        // case GET_CAPTCHA_SUCCESS:
        //     return {...state,captchaUrl:action.captchaUrl}
        // case CLEAR_DATA:
        //     return initialState
        default:
            return state;
    }
}
export default authReducer;

export const signIn = (data)=>({type:SIGN_IN,data})

// export const setToken = (pass)=>{
// }
// export const setIsLogin = ()=>({type:SET_IS_LOGIN})