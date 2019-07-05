const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILURE = "LOGIN_FAILURE"

//action create
 function loginSucessAction(result){
     return{
         type : LOGIN_REQUEST
     }
 }

 function loginSucessAction(payload){
    return{
        type : LOGIN_SUCCESS,
        payload: result
    }
}

function loginSucessAction(error){
    return{
        type : LOGIN_FAILURE,
        error
        
    }
}