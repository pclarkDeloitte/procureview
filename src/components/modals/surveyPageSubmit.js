import React, { Component } from 'react'



class SurveyPageSubmit extends Component {
    constructor(props) {
        super(props);

        this.state={

        }
    }

    render() {
        return (
            <div style={{backgroundColor:'rgba(0,0,0,0.9)', height:'100vh', width:'100vw', position:'fixed', top:0, left:0, zIndex:10000}}>
                
                <div 
                    style={{backgroundColor:'rgb(220,220,220)', color:'rgb(40,40,40)', borderRadius:10, textAlign:'center', width:'40%', marginLeft:'30%', marginTop:'auto'}}
                    className={'verticalCenter'}>     

                    <div style={{padding:30, paddingBottom:0}}>                                   
                        <span style={{fontSize:20}}>
                            Section submitted
                        </span>
                        <br />            
                        <br />                                           
                        <i className="fa fa-check-square-o" style={{fontSize:60, color:'rgb(80,80,80)'}}></i>
                        <br />
                        <br />
                        <span>
                            This section of the survey will now be saved. If you would like to change any of you responses, please make sure you click the submit button again. 
                        </span>
                    </div>
                    
                    <div                         
                        onClick={() => {this.props.surveyPageSubmit()}}
                        style={{backgroundColor:'rgb(46, 204, 113)', width:'20%', marginLeft:'40%', color:'white', borderRadius:10, padding:10, marginTop:20, cursor:'pointer', marginBottom:30}}>                        
                        <i className="fa fa-check"></i>
                        <span 
                            style={{marginLeft:10}}>
                            Ok
                        </span>
                    </div>

                </div>
            </div>
        )
    }
}

export default SurveyPageSubmit;