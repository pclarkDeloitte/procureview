import React, { Component } from 'react'

import Collapsible from 'react-collapsible';
import questionObj from '../data/questionObjProcess.js'

import SurveyPageSubmit from '../modals/surveyPageSubmit.js'

class ProcessSurveySection extends Component {
    constructor(props) {
        super(props);
        this.surveyPageSubmit = this.surveyPageSubmit.bind(this);
        this.state={
            currentSection: 'Process',
            submitModalVisible: false,
            noOfQuestions: this.getNoOfQuestions(),
            answersArray: this.props.answersArray
        }
    }

    componentDidMount = () => {
        //Update the state question variables based on the answers array
        this.pullAnswerData();
    }
    

    answerStatus(value) {
        if(value>0) {
            return (
                <div style={{backgroundColor:'rgb(46, 204, 113)', color:'white', borderRadius:10, padding: 5, paddingLeft:10, paddingRight:10, textAlign:'center'}}>
                    <i className="fa fa-check"></i>
                    <span style={{marginLeft:10}}>
                        Complete
                    </span>
                </div>
                
            )
        } else {
            return (
                <div style={{backgroundColor:'rgb(52, 152, 219)', color:'white', borderRadius:10, padding: 5, paddingLeft:10, paddingRight:10, textAlign:'center'}}>
                    <i className="fa fa-ellipsis-h"></i>
                    <span style={{marginLeft:10,}}>
                        In progress
                    </span>
                </div>
            )
        }
    }

    getNoOfQuestions = () => {
        var number = this.props.questionObj;
        return number;
    }


    getStateVar(pageQCount) {
        var returnString = "q" + String(pageQCount);
        return returnString;
    }
    

    renderQuestionTile(category, question, answerLvl1, answerLvl3, answerLvl5, pageQCount) {
        
        const qState = this.getStateVar(pageQCount);

        return (
            <div style={{backgroundColor:'rgb(180,180,180)', color:'rgb(40,40,40)', padding:30, borderRadius:10, marginTop:40, textAlign:'left'}}>
                <div style={{display:'flex', flexDirection:'row',}}>
                    <div style={{width:'70%', float:'left'}}>
                        <span style={{fontSize:20, }}>
                            {question}
                        </span>
                    </div>
                    <div style={{width:'15%', float:'right'}}>
                    </div>
                    <div style={{width:'15%', float:'right'}}>
                        {this.answerStatus(this.state[qState])}
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row', marginTop:20, marginBottom:20, }}>
                    <div       
                        onClick={() => {
                            this.setState({
                                [qState]: 1
                            });
                        }}
                        className = {(this.state[qState]===1 ? 'surveyAnswerTileActive' : (this.state[qState]===0 ? 'surveyAnswerTileInactive' : 'surveyAnswerTileInactiveFalse'))}
                        style={{cursor:'pointer', borderRadius:5, padding:10, width:'32%',marginLeft:'0%', marginRight:'1%', textAlign:'center'}}>
                        <span>
                            {answerLvl1}
                        </span>
                    </div>
                    <div       
                        onClick={() => {
                            this.setState({
                                [qState]: 3
                            });
                        }}
                        className = {(this.state[qState]===3 ? 'surveyAnswerTileActive' : (this.state[qState]===0 ? 'surveyAnswerTileInactive' : 'surveyAnswerTileInactiveFalse'))}
                        style={{cursor:'pointer', borderRadius:5, padding:10, width:'32%',marginLeft:'1%', marginRight:'1%', textAlign:'center'}}>
                        <span>
                            {answerLvl3}
                        </span>
                    </div>
                    <div       
                        onClick={() => {
                            this.setState({
                                [qState]: 5
                            });
                        }}
                        className = {(this.state[qState]===5 ? 'surveyAnswerTileActive' : (this.state[qState]===0 ? 'surveyAnswerTileInactive' : 'surveyAnswerTileInactiveFalse'))}
                        style={{cursor:'pointer', borderRadius:5, padding:10, width:'32%',marginLeft:'1%', marginRight:'0%', textAlign:'center'}}>
                        <span>
                            {answerLvl5}
                        </span>
                    </div>
                
                </div>

                <Collapsible 
                    trigger="Add a comment" 
                    triggerStyle={{backgroundColor:'rgb(140,140,140)', color:'white', borderRadius:10, cursor:'pointer', padding: 5, paddingLeft:10, paddingRight:10}}
                    >
                    <div style={{width:'100%', display:'inline-block', textAlign:'left', marginTop:10, padding:10, paddingLeft:0}}>    
                        <input
                            type="text" 
                            placeholder="Provide your comments here..."
                            style={{backgroundColor:'rgb(240,240,240)', borderRadius:10, width:'100%', marginTop:0, border:'none'}}
                        />
                    </div>
                </Collapsible>

            </div>
        );
    }

    renderSurveyPage(pageCategory) {
        const views = [];
        const questionObj = this.props.questionObj

        for ( var i =0; i < questionObj.length; i++){
        
            const qState = this.getStateVar(i+1);

            var category = questionObj[i].category;
            var question = questionObj[i].question;
            var answerLvl1 = questionObj[i].answerLvl1;
            var answerLvl3 = questionObj[i].answerLvl3;
            var answerLvl5 = questionObj[i].answerLvl5;

            if(pageCategory === category.trim()) {     
                views.push(             
                    this.renderQuestionTile(category, question, answerLvl1, answerLvl3, answerLvl5, i+1)
                );
            }
        }  

        return views;
    }

    pullAnswerData = () => {        
        const questionObj = this.props.questionObj;
        for ( var i=0; i < questionObj.length; i++){        
            let qState = this.getStateVar(i+1);
            let value = this.state.answersArray[i]
            this.setState({
                [qState]: value
            });
        }  
    }

    updateAnswersArray = () => {              
        const questionObj = this.props.questionObj;
        var newAnswersArray = this.state.answersArray;
        for ( var i=0; i < questionObj.length; i++){        
            let qState = this.getStateVar(i+1);
            newAnswersArray[i] = this.state[qState];
        }  
        this.setState({
            answersArray: newAnswersArray
        }, this.sendArrayBack);
        
    }

    sendArrayBack = () => {
        this.props.answersHandler(this.state.currentSection, this.state.answersArray);
    }


    submitModalVisible() {
        if(this.state.submitModalVisible === true) {
            return <SurveyPageSubmit surveyPageSubmit={this.surveyPageSubmit}/>
        }
    }

    surveyPageSubmit() {
        this.setState(prevState => ({submitModalVisible: !prevState.submitModalVisible}));
        this.updateAnswersArray();
    }

    render() {
        return (
            <div style={{textAlign:'center', width:'100%',}}>
                    
                {this.submitModalVisible()}
                {this.state.submitModalVisible}

                <div style={{width:'90%',  marginLeft:'5%', marginBottom:20}}>
                    {this.renderSurveyPage('Process')}                    
                    <div                         
                        onClick={() => {this.surveyPageSubmit()}}
                        style={{backgroundColor:'rgb(46, 204, 113)', width:'10%', marginLeft:'45%', color:'white', borderRadius:10, padding:10, marginTop:20, cursor:'pointer'}}>                        
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

export default ProcessSurveySection;
