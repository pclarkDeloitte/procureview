import React, { Component } from 'react'

import StrategySurveySection from '../survey/strategySurveySection.jsx'
import ProcessSurveySection from '../survey/processSurveySection.jsx'
import PeopleSurveySection from '../survey/peopleSurveySection.jsx'
import TechnologySurveySection from '../survey/technologySurveySection.jsx'
import RiskComplianceSurveySection from '../survey/riskComplianceSurveySection.jsx'


import questionObjStrategy from '../data/questionObjStrategy.js'
import questionObjProcess from '../data/questionObjProcess.js'
import questionObjPeople from '../data/questionObjPeople.js'
import questionObjRisk from '../data/questionObjRisk.js'
import questionObjTechnology from '../data/questionObjTechnology.js'

class SurveySection extends Component {
    constructor(props) {
        super(props);

        this.answersHandler = this.answersHandler.bind(this);

        this.state={
            currentSection: 'Strategy',
            strategyAnswers: this.props.strategyAnswers,
            processAnswers: this.props.processAnswers,
            peopleAnswers: this.props.peopleAnswers,
            technologyAnswers: this.props.technologyAnswers,
            riskComplianceAnswers: this.props.riskComplianceAnswers,
        }
    }

    componentDidMount = () => {
        //Initialise the answers array
        this.initAnswersArrays();  
    }

    initAnswersArrays = () => {
        const noOfStrategyQs = questionObjStrategy.length;
        if(this.state.strategyAnswers == []) {
            for (var i = 0; i < noOfStrategyQs; i++) {this.state.strategyAnswers.push(0)}; //Push blank scores for each of the questions when the page is loaded. Later this can be stored in local storage
        }
        
    }

    answersHandler = (rawSection, updatedArray) => {
        const section = rawSection.toLowerCase(); //Convert string to lowercase

        if(section === 'strategy') {
            this.setState({
                strategyAnswers: updatedArray
            })
        } else if(section === 'process') {
            this.setState({
                processAnswers: updatedArray
            })
        } else if(section === 'people') {
            this.setState({
                peopleAnswers: updatedArray
            })
        } else if(section === 'technology') {
            this.setState({
                technologyAnswers: updatedArray
            })
        } else if(section === 'riskCompliance') {
            this.setState({
                riskComplianceAnswers: updatedArray
            })
        }
        this.props.answersHandler(rawSection, updatedArray);
    }

	surveySectionVisibleBool() {
		if(this.state.currentSection === 'Strategy') {
			return <StrategySurveySection questionObj={questionObjStrategy} answersArray={this.state.strategyAnswers} answersHandler={this.answersHandler}/>
		} else if(this.state.currentSection === 'Process') {
			return <ProcessSurveySection questionObj={questionObjProcess} answersArray={this.state.processAnswers} answersHandler={this.answersHandler}/>
		} else if(this.state.currentSection === 'People') {
			return <PeopleSurveySection questionObj={questionObjPeople} answersArray={this.state.peopleAnswers} answersHandler={this.answersHandler}/>
		} else if(this.state.currentSection === 'Technology') {
			return <TechnologySurveySection questionObj={questionObjTechnology} answersArray={this.state.technologyAnswers} answersHandler={this.answersHandler}/>
		} else if(this.state.currentSection === 'Risk & Compliance') {
			return <RiskComplianceSurveySection questionObj={questionObjRisk} answersArray={this.state.riskComplianceAnswers} answersHandler={this.answersHandler}/>
		} 
    }

    
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <div style={{width:'90%', marginLeft:'5%', textAlign:'center', display:'flex', flexDirection:'row'}}>
                    <div 
                        style={{ cursor:'pointer', display: 'table', width:'16%', margin:'2.5%', marginLeft: 0, height:'6vh', borderRadius:10, textAlign:'center'}}                        
                        className = {(this.state.currentSection==='Strategy' ? 'surveyTileActive' : 'surveyTileInactive')}
                        onClick={() => {this.setState({
                            currentSection: 'Strategy'
                        })}}>
                        <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign:'center'}}>
                            <i className="fa fa-trophy"></i>
                            <span style={{marginLeft:5}}>
                                Strategy
                            </span>
                        </div>
                    </div>
                    <div 
                        style={{ cursor:'pointer', display: 'table', width:'16%', margin:'2.5%', height:'6vh', borderRadius:10, textAlign:'center'}}                        
                        className = {(this.state.currentSection==='Process' ? 'surveyTileActive' : 'surveyTileInactive')}
                        onClick={() => {this.setState({
                            currentSection: 'Process'
                        })}}>
                        <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign:'center'}}>
                            <i className="fa fa-cogs"></i>
                            <span style={{marginLeft:5}}>
                                Process
                            </span>
                        </div>
                    </div>
                    <div 
                        style={{ cursor:'pointer', display: 'table', width:'16%', margin:'2.5%', height:'6vh', borderRadius:10, textAlign:'center'}}                        
                        className = {(this.state.currentSection==='People' ? 'surveyTileActive' : 'surveyTileInactive')}
                        onClick={() => {this.setState({
                            currentSection: 'People'
                        })}}>
                        <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign:'center'}}>
                            <i className="fa fa-users"></i>
                            <span style={{marginLeft:5}}>
                                People
                            </span>
                        </div>
                    </div>
                    <div 
                        style={{ cursor:'pointer', display: 'table', width:'16%', margin:'2.5%', height:'6vh', borderRadius:10, textAlign:'center'}}                        
                        className = {(this.state.currentSection==='Technology' ? 'surveyTileActive' : 'surveyTileInactive')}
                        onClick={() => {this.setState({
                            currentSection: 'Technology'
                        })}}>
                        <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign:'center'}}>
                            <i className="fa fa-desktop"></i>
                            <span style={{marginLeft:5}}>
                                Technology
                            </span>
                        </div>
                    </div>
                    <div 
                        style={{ cursor:'pointer', display: 'table', width:'16%', margin:'2.5%', marginRight:0, height:'6vh', borderRadius:10, textAlign:'center'}}                        
                        className = {(this.state.currentSection==='Risk & Compliance' ? 'surveyTileActive' : 'surveyTileInactive')}
                        onClick={() => {this.setState({
                            currentSection: 'Risk & Compliance'
                        })}}>
                        <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign:'center'}}>
                            <i className="fa fa-tachometer"></i>
                            <span style={{marginLeft:5}}>
                                Risk & Compliance
                            </span>
                        </div>
                    </div>
                </div>

                <div style={{merginTop:20}}>
                    {this.surveySectionVisibleBool()}
                </div>
            </div>
        )
    }
}

export default SurveySection;
