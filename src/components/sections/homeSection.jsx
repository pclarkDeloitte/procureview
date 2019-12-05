import React, { Component } from 'react'

import Loading from '../loading.js'

class HomeSection extends Component {
    constructor(props) {
        super(props);

        this.state={
            name: '',
            email: '',
            organisation: '',
            spend: '',
            industry: '',
            loaderVisible: false
        }
    }

    userDetailsSubmit = () => {
        alert(this.state.name)
        this.props.updateUserInfoHandler(
            this.state.name,
            this.state.email,
            this.state.organisation,
            this.state.spend,
            this.state.industry,
        )
    }

    onNameChange = (event) => {
      this.setState({name: event.target.value});
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    
    onOrganisationChange = (event) => {
        this.setState({organisation: event.target.value});
    }
    
    onSpendChange = (event) => {
        this.setState({spend: event.target.value});
    }
    
    onIndustryChange = (event) => {
        this.setState({industry: event.target.value});
    }

    renderLoader = () => {
        if(this.state.loaderVisible) {
            return(
                <Loading />    
            )
        } else {
            return null;   
        }
    }

    render() {
        return (
            <div style={{textAlign:'center', width:'80%', marginLeft:'10%', }}>
                
                {this.renderLoader()}

                <p style={{fontSize:'4vh', color:'white'}}>
                    Welcome to the Deloitte ProcuReview platform
                </p>
                
                <img src={require('../../assets/images/rating.png')} style={{height:'15vh'}}/>
                <br />

                <div style={{marginTop:20, textAlign:'left'}}>
                    <span style={{color:'white', fontSize:20, }}>
                        The ProcuReview framework includes a comprehensive set of metrics to create a holistic view of an organisation's procurement capability and effectiveness. To begin the assessment, please complete the form below.
                    </span>
                </div>
                
                <div style={{textAlign:'center', marginTop:20, width:'30%', marginLeft:'35%'}}>

                    <div style={{width:'100%', textAlign:'left'}}>
                        <span style={{color:'rgb(200,200,200)'}}>
                            Name:
                        </span>
                    </div>
                    <input 
                        onChange={this.onNameChange.bind(this)}
                        type="text" 
                        style={{color:'rgb(100,100,100)', borderRadius: 5, padding:10, backgroundColor:'rgb(220,220,220)', border:'none', width:'100%', marginTop:5}}/>
                    <br /> 
                    
                    <br />                       

                    <div style={{width:'100%', textAlign:'left'}}>
                        <span style={{color:'rgb(200,200,200)'}}>
                            Email:
                        </span>
                    </div>
                    <input 
                        onChange={this.onEmailChange.bind(this)}
                        type="text" 
                        style={{color:'rgb(100,100,100)', borderRadius: 5, padding:10, backgroundColor:'rgb(220,220,220)', border:'none', width:'100%', marginTop:5}}/>
                    <br />
                    
                    <br />                   

                    <div style={{width:'100%', textAlign:'left'}}>
                        <span style={{color:'rgb(200,200,200)'}}>
                            Organisation:
                        </span>
                    </div>
                    <input 
                        onChange={this.onOrganisationChange.bind(this)}
                        type="text" 
                        style={{color:'rgb(100,100,100)', borderRadius: 5, padding:10, backgroundColor:'rgb(220,220,220)', border:'none', width:'100%', marginTop:5}}/>
                    <br />

                    <br />

                    <div style={{width:'100%', textAlign:'left'}}>
                        <span style={{color:'rgb(200,200,200)'}}>
                            Industry:
                        </span>
                    </div>        
                    <select value={this.state.industry} onChange={this.onIndustryChange.bind(this)} style={{color:'rgb(100,100,100)', borderRadius: 5, padding:10, backgroundColor:'rgb(220,220,220)', border:'none', width:'100%', marginTop:5}}>
                        <option value=""></option>
                        <option value="industry1">Energy and Resources</option>
                        <option value="industry2">Health</option>
                        <option value="industry5">Higher education</option>
                        <option value="industry3">Utilities</option>
                        <option value="industry4">Financial services</option>
                        <option value="industry6">Public sector</option>
                        <option value="industry7">Telecommunication and media</option>
                    </select>

                    <br />
                    <br />

                    <div style={{width:'100%', textAlign:'left'}}>
                        <span style={{color:'rgb(200,200,200)'}}>
                            Organisation annual spend:
                        </span>
                    </div>        
                    <select value={this.state.spend} onChange={this.onSpendChange.bind(this)} style={{color:'rgb(100,100,100)', borderRadius: 5, padding:10, backgroundColor:'rgb(220,220,220)', border:'none', width:'100%', marginTop:5}}>
                        <option value=""></option>
                        <option value="spend1">Less than $20M AUD</option>
                        <option value="spend2">$20M - $50M AUD</option>
                        <option value="spend3">$50M - $200M AUD</option>
                        <option value="spend4">$200M - $500M AUD</option>
                        <option value="spend5">$500M - $1B AUD</option>
                        <option value="spend6">$1B - $10B AUD</option>
                        <option value="spend7">More than $10B AUD</option>
                    </select>
                    <br />
                    <br />   
                    <div                         
                        onClick={() => {
                            this.userDetailsSubmit()
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
    }
}

export default HomeSection;
