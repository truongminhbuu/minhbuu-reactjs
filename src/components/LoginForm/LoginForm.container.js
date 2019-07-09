import{conect} from 'react-redux'
import LoginForm from'./'
import { connect } from 'tls';

const mapStateToProps =(state)=>{
    return{
        loading: state.loginReducer.loading,
        data: state.loginReducer.data,
        error:state.loginReducer.error
    }
}

// const mapStateToProps=()=>{
//     return{

//     }
// }
export default connect(mapStateToProps)(LoginForm)