import React, { Component } from 'react'



class headerBar extends Component {
    constructor(props) {
        super(props);

        this.state={

        }
    }

    render() {
        return (
            <div style={{backgroundColor:'rgb(50,50,50)', height:'5vh', padding:'1vh', zIndex:10, alignContent:'center', display:'flex', flexDirection:'row'}}>
                <div style={{width:'30%', textAlign:'left', display:'flex', flexDirection:'row'}}>
                    <div style={{width:'30%', textAlign:'left', padding:'1vh'}}>
                        <img src={require('../../assets/images/logo.png')} style={{height:'3vh'}}/>                    
                    </div>    
                </div>
                <div style={{width:'40%', textAlign:'center'}}>
                    <span style={{color:'rgb(160,160,160)', fontSize:'3vh', lineHeight:'5vh', textAlign:'center', marginLeft:'7vw'}}>
                        ProcuReview
                    </span>
                </div>
                <div style={{width:'30%', justifyContent:'center', alignContent:'center'}}>
                    <div                         
                        onClick={() => {
                            this.props.writeFirebaseData();
                        }}
                        style={{border: 'none', backgroundColor:'rgb(46, 204, 113)', width:'10vw', height:'5vh', flexDirection:'row', color:'white', borderRadius:10, cursor:'pointer', marginLeft:'auto', justifyItems:'center'}}>
                        <i className="fa fa-upload" style={{lineHeight:'5vh'}}></i>
                        <span style={{marginLeft:5, lineHeight:'5vh'}}>
                            Upload
                        </span>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default headerBar;
