


import { GET_SIGNUP_FAILURE, GET_SIGNUP_REQUIEST, GET_SIGNUP_SUCCESS, POST_SIGNUP_FAILURE, POST_SIGNUP_REQUIEST, POST_SIGNUP_SUCCESS } from "../auth/authAction"



const initState={
    isError:false,
    isLoading:false,
    auth:[],
    getAuth:[]

}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_SIGNUP_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_SIGNUP_SUCCESS:
                return({
                    ...state,
                    isErrorr:false,
                    isLoading:false,
                    auth:action.payload
                })
                case POST_SIGNUP_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case GET_SIGNUP_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case GET_SIGNUP_SUCCESS:
                return({
                    ...state,
                    isErrorr:false,
                    isLoading:false,
                    getAuth:action.payload
                })
                case GET_SIGNUP_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })



                    default:
                        return({
                            ...state
                        })
    }
}