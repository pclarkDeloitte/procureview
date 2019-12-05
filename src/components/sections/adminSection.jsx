import React, { Component } from 'react'

import ReactLoading from 'react-loading';

class AdminSection extends Component {
    
    constructor(props) {
        super(props);

        this.state={
            adminMode: this.props.adminMode,
            username: '',
            password: '',
            loadingAnimationVisible: true
        }
    }
    
    componentDidMount = () => {
        if(!this.props.adminMode) {
            //alert('Not logged in')
        } else {
            //alert('Logged in')
        }
    }


    onUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }


    renderAdminSection = () => {
        if(this.props.loadingAnimationVisible) {
            return(
                <div style={{textAlign:'center'}}>
                    <ReactLoading />
                </div>
            )
        } else if(!this.props.adminMode) {
                //Not logged in
                return (
                    <div style={{marginTop:50, }}>
                        <span style={{color:'white', fontSize:30}}>
                            ProcuReview administator's portal
                        </span>
                        <br />
                        <br />
                        <span style={{color:'white', fontSize:16}}>
                            Please enter your credentials below to log in as an administrator
                        </span>
                        <br />
                        <br />
                        
    
                        <div style={{textAlign:'center', marginTop:20, width:'30%', marginLeft:'35%'}}>
                            <div style={{width:'100%', textAlign:'left'}}>
                                <span style={{color:'rgb(200,200,200)'}}>
                                    Username:
                                </span>
                            </div>
                            <input 
                                onChange={this.onUsernameChange.bind(this)}
                                type="text" 
                                style={{color:'rgb(100,100,100)', borderRadius: 5, height:34, textIndent:10, padding:0, backgroundColor:'rgb(220,220,220)', border:'none', width:'100%', marginTop:5}}/>
                            <br /> 
                            <br />   
    
                            <div style={{width:'100%', textAlign:'left'}}>
                                <span style={{color:'rgb(200,200,200)'}}>
                                    Password:
                                </span>
                            </div>
                            <input 
                                onChange={this.onPasswordChange.bind(this)}
                                type="password" 
                                style={{color:'rgb(100,100,100)', borderRadius: 5, height:34, textIndent:10, backgroundColor:'rgb(220,220,220)', border:'none', width:'100%', marginTop:5}}/>
                            <br /> 
                            <br />   
    
                            <div                         
                                onClick={() => {
                                    this.setState({
                                        loadingAnimationVisible: true
                                    })
                                    setTimeout(this.props.authenticateUser(this.state.username, this.state.password), 3000);                                    
                                }}
                                style={{border: 'none', backgroundColor:'rgb(46, 204, 113)', width:'50%', marginLeft:'25%', color:'white', borderRadius:10, padding:10, marginTop:20, cursor:'pointer'}}>
                                <i className="fa fa-check"></i>
                                <span style={{marginLeft:10}}>
                                    Submit
                                </span>                    
                            </div>
                        </div>
                    </div>
                )
            } else {
                //Logged in
                return (
                    <div>
                        <span>
                            Hi you are logged in
                        </span>
                    </div>                
                )
            }
    
    }

    render() {
        return (
            <div>
                {this.renderAdminSection()}
            </div>
        )
    }
}

export default AdminSection;
