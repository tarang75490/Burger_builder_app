import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Auxiliary'
const withErrorHandler = (WrapperComponent,axios) =>{
    return class extends React.Component{
        state={
            error:null
        }
        
        componentWillMount(){
            this.reqInterceptors = axios.interceptors.request.use(req=>{
                this.setState({
                    error:null
                })
                return req; 
            })
            this.resInterceptors = axios.interceptors.response.use(res=> res,error=>{
                this.setState({ 
                    error:error
                })
            })
        }
        componentWillUnmount(){
            // console.log('Component Did UNmount',this.reqInterceptors,this.resInterceptors)
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }
        errorconfirmHandler=()=>{  
            this.setState({error:null}) 
        }
        render(){
        return (
            <Aux>
                <Modal show={this.state.error} modalclosed={this.errorconfirmHandler}>
                Somethimg Went wrong<br/>
                {this.state.error? this.state.error.message:null} 
            </Modal>
            <WrapperComponent {...this.props}/>  
            </Aux>
        );
    }
}
}


export default withErrorHandler

