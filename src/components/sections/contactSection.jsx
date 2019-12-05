import React, { Component } from 'react'


import file1 from '../../assets/files/2019 Deloitte CPO Survey.pdf'



class ContactSection extends Component {
    constructor(props) {
        super(props);

        this.state={
            name: this.props.name,
            email: this.props.email,            
            strategyAnswers: this.props.strategyAnswers,
            processAnswers: this.props.processAnswers,
            peopleAnswers: this.props.peopleAnswers,
            technologyAnswers: this.props.technologyAnswers,
            riskComplianceAnswers: this.props.riskComplianceAnswers
        }
    }
   

	componentDidMount() {
        //
        
    }
    
	
    renderProgressBar = (array) => {
        var result = false;
        
        if(array === []) {
            //Result remains as false
        } else {
            result = true;
            for (var i = 0; i < array.length; i++) {
                if (array[i] <= 0) {
                    result = false;
                    break;
                }
            }
        }

        //Init the average variable
        var avg; 
        
        if (array.length) {
            let sum = array.reduce(function(a, b) { return a + b; });
            avg = Math.round( (sum / array.length) * 10) / 10;
        }
        //alert(avg);
        const avgScorePercent = Math.round(avg/5*100);
        const avgScorePercentString = String(avgScorePercent) + "%";
        //alert(avgScorePercent);
        //alert(avgScorePercentString);

        var backgroundColor;
        if(avgScorePercent < 30) {
            backgroundColor = '#e74c3c' //Red
        } else if(avgScorePercent < 50) {
            backgroundColor = '#e67e22' //Orange
        } else if(avgScorePercent < 70) {
            backgroundColor = '#f1c40f' //Yellow
        } else if(avgScorePercent >= 70) {
            backgroundColor = '#2ecc71' //Green
        }
        
        const barStyle = {
            height: 20, 
            borderRadius: 10, 
            width: avgScorePercentString, 
            backgroundColor: backgroundColor
        }

        
        if((result === true) && !isNaN(avgScorePercent)) {
            return(
                <div style={{flex:1, textAlign:'right'}}>
                    <span style={{color:'rgb(80,80,80)', fontSize:18, width:'100%', textAlign:'right'}}>
                        Final score: {avgScorePercentString}
                    </span>
                    <div style={{height:20, borderRadius:10, width:'100%', backgroundColor:'rgb(100,100,100)'}}>
                        <div style={barStyle}>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <span style={{color:'rgb(80,80,80)', fontSize:18}}>
                        Please complete the submit the section before reviewing your result
                    </span>
                </div>
            )
        }
        

    }

    categoryBar(category) {
        if(category==='Strategy') {
            return(
                this.renderProgressBar(this.state.strategyAnswers)
            );
        } else if(category==='People') {
            return(
                this.renderProgressBar(this.state.peopleAnswers)
            );
        } else if(category==='Process') {
            return(
                this.renderProgressBar(this.state.processAnswers)
            );
        } else if(category==='Technology') {
            return(
                this.renderProgressBar(this.state.technologyAnswers)
            );
        } else if(category==='Risk & Compliance') {
            return(
                this.renderProgressBar(this.state.riskComplianceAnswers)
            );
        }
    }

    render() {

        return (
            <div style={{}}>
                <div style={{width:'100%', display:'flex', flexDirection:'row'}}>
                    <div style={{flex:1, padding:30}}>
                        <span style={{color:'white', fontSize:30}}>
                            Our team
                        </span>
                        <div style={{display:'flex', flexDirection:'row', backgroundColor:'rgb(160,160,160)', borderRadius:10, padding:20, marginTop:20, textAlign:'left', fontSize:30, color:'rgb(40,40,40)'}}>                    
                            <div style={{flex:1, alignItems:'center', justifyContent:'center', alignContent:'center'}}>
                                <img src={require('../../assets/images/thumbs/imgJOConnor.png')} style={{height:125, marginTop:'10%'}}/>
                            </div>
                            <div style={{flex:4, padding:10, paddingLeft:25}}>
                                <span style={{color:'white', fontSize:40}}>
                                    John O'Connor
                                </span>
                                <br />
                                <span style={{color:'rgb(100,100,100)', fontSize:24}}>
                                    Partner, Supply Chain & Procurement
                                </span>
                                <br />
                                <span style={{color:'rgb(130,130,130)', fontSize:24}}>
                                    joconnor@deloitte.com.au
                                </span>
                                <br />
                                
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', backgroundColor:'rgb(160,160,160)', borderRadius:10, padding:20, marginTop:20, textAlign:'left', fontSize:30, color:'rgb(40,40,40)'}}>                    
                            <div style={{flex:1}}>
                                <img src={require('../../assets/images/thumbs/imgChrRiley.png')} style={{height:125, marginTop:'10%', resizeMode:'contain'}}/>
                            </div>
                            <div style={{flex:4, padding:10, paddingLeft:25}}>
                                <span style={{color:'white', fontSize:40}}>
                                    Chris Riley
                                </span>
                                <br />
                                <span style={{color:'rgb(100,100,100)', fontSize:24, margin:0}}>
                                    Director, Supply Chain & Procurement
                                </span>
                                <br />
                                <span style={{color:'rgb(130,130,130)', fontSize:24}}>
                                    chrriley@deloitte.com.au
                                </span>
                                <br />
                                
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', backgroundColor:'rgb(160,160,160)', borderRadius:10, padding:20, marginTop:20, textAlign:'left', fontSize:30, color:'rgb(40,40,40)'}}>                    
                            <div style={{flex:1}}>
                                <img src={require('../../assets/images/thumbs/imgASmith.png')} style={{height:125, marginTop:'10%'}}/>
                            </div>
                            <div style={{flex:4, padding:10, paddingLeft:25}}>
                                <span style={{color:'white', fontSize:40}}>
                                    Anthony Smith
                                </span>
                                <br />
                                <span style={{color:'rgb(100,100,100)', fontSize:24}}>
                                    Manager, Supply Chain & Procurement
                                </span>
                                <br />
                                <span style={{color:'rgb(130,130,130)', fontSize:24}}>
                                    anthonysmith@deloitte.com.au
                                </span>
                                <br />
                                
                            </div>
                        </div>
                    </div>

                    <div style={{flex:1, padding:30}}>
                        <span style={{color:'white', fontSize:30}}>
                            Publications
                        </span>
                        
                        <a rel="noopener noreferrer" target='_blank' href={file1} style={{ textDecoration: 'none' }}>
                            <div
                                style={{cursor:'pointer', display:'flex', flexDirection:'row', backgroundColor:'rgb(140,140,140)', borderRadius:10, padding:20, marginTop:20, textAlign:'left', fontSize:30, color:'rgb(40,40,40)'}}>                    
                                <div style={{flex:1}}>
                                    <img src={require('../../assets/images/thumbs/pdfIcon.png')} style={{height:80, marginTop:'10%'}}/>
                                </div>
                                <div style={{flex:6, padding:10, paddingLeft:5, display:'flex', alignItems:'center'}}>
                                    <span style={{color:'rgb(80,80,80)', fontSize:32, textDecoration:'none'}}>
                                        2019 CPO Survey insights
                                    </span>                                
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            
            </div>
        )
    }
}

export default ContactSection;
