import React, { Component } from 'react'

class ResultsSection extends Component {
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
            <div style={{display:'flex', flexDirection:'row'}}>

                <div style={{flex:1, padding:30}}>
                    <span style={{fontSize:30, margin:20, color:'white'}}>
                        User details
                    </span>
                </div>




                <div style={{flex:1, paddingTop:30}}>
                    <span style={{fontSize:30, margin:20, color:'white'}}>
                        Survey results
                    </span>

                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={{flex:1, padding:30}}>
                            <div style={{backgroundColor:'rgb(160,160,160)', borderRadius:10, padding:20, marginTop:20, textAlign:'left', fontSize:30, color:'rgb(40,40,40)'}}>                    
                                <div>
                                    <i className="fa fa-trophy"></i>
                                    <span style={{marginLeft:10}}>
                                        Strategy
                                    </span>
                                </div>
                                <div style={{marginTop:10}}>
                                    {this.categoryBar('Strategy')}
                                </div>
                            </div>
                            <div style={{backgroundColor:'rgb(160,160,160)', borderRadius:10, padding:20, marginTop:20, textAlign:'left', fontSize:30, color:'rgb(40,40,40)'}}>                    
                                <div>
                                    <i className="fa fa-cogs"></i>
                                    <span style={{marginLeft:10}}>
                                        Process
                                    </span>
                                </div>
                                <div style={{marginTop:10}}>
                                    {this.categoryBar('Process')}
                                </div>
                            </div>
                            <div style={{backgroundColor:'rgb(160,160,160)', borderRadius:10, padding:20, marginTop:20, textAlign:'left', fontSize:30, color:'rgb(40,40,40)'}}>                    
                                <div>
                                    <i className="fa fa-users"></i>
                                    <span style={{marginLeft:10}}>
                                        People
                                    </span>
                                </div>
                                <div style={{marginTop:10}}>
                                    {this.categoryBar('People')}
                                </div>
                            </div>
                            <div style={{backgroundColor:'rgb(160,160,160)', borderRadius:10, padding:20, marginTop:20, textAlign:'left', fontSize:30, color:'rgb(40,40,40)'}}>                    
                                <div>
                                    <i className="fa fa-desktop"></i>
                                    <span style={{marginLeft:10}}>
                                        Technology
                                    </span>
                                </div>
                                <div style={{marginTop:10}}>
                                    {this.categoryBar('Technology')}
                                </div>
                            </div>
                            <div style={{backgroundColor:'rgb(160,160,160)', borderRadius:10, padding:20, marginTop:20, textAlign:'left', fontSize:30, color:'rgb(40,40,40)'}}>                    
                                <div>
                                    <i className="fa fa-tachometer"></i>
                                    <span style={{marginLeft:10}}>
                                        Risk & Compliance
                                    </span>
                                </div>
                                <div style={{marginTop:10}}>
                                    {this.categoryBar('Risk & Compliance')}
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>

                
            
            </div>
        )
    }
}

export default ResultsSection;
