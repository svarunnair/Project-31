import axios from "axios"




export const POST_SIGNUP_REQUIEST="POST_SIGNUP_REQUIEST"
export const POST_SIGNUP_SUCCESS="POST_SIGNUP_SUCCESS"
export const POST_SIGNUP_FAILURE="POST_SIGNUP_FAILURE"

export const GET_SIGNUP_REQUIEST="GET_SIGNUP_REQUIEST"
export const GET_SIGNUP_SUCCESS="GET_SIGNUP_SUCCESS"
export const GET_SIGNUP_FAILURE="GET_SIGNUP_FAILURE"


const postSignupRquiest=()=>{
    return({
        type:POST_SIGNUP_REQUIEST
    })
}
const postSignupSuccess=(data)=>{
    return({
        type:POST_SIGNUP_SUCCESS,
        payload:data
    })
}
const postSignupFailure=(data)=>{
    return({
        type:POST_SIGNUP_FAILURE,
        error:data
    })
}

const getSignupRquiest=()=>{
    return({
        type:GET_SIGNUP_REQUIEST
    })
}
const getSignupSuccess=(data)=>{
    return({
        type:GET_SIGNUP_SUCCESS,
        payload:data
    })
}
const getSignupFailure=(data)=>{
    return({
        type:GET_SIGNUP_FAILURE,
        error:data
    })
}

export const postSignup=(data)=>(dispatch)=>{
    dispatch(postSignupRquiest())
    return axios({
        url:" http://localhost:8000/auth",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postSignupSuccess(res.data))
        localStorage.setItem('token',res.data)
        console.log("signup",res.data)
    })
    .catch((error)=>{
        dispatch(postSignupFailure())
    })
}

export const getSignup=()=>(dispatch)=>{
    dispatch(getSignupRquiest())
    return axios({
        url:" http://localhost:8000/auth",
        method:"GET",
     
    })
    .then((res)=>{
        dispatch(getSignupSuccess(res.data))
        console.log("GETsignup",res.data)
    })
    .catch((error)=>{
        dispatch(getSignupFailure())
    })
}