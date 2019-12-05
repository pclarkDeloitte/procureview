import React, { Component } from 'react'
import logo from './logo.svg';
import firebase from './firebase.js'

//Import core layout components
import HeaderBar from './components/layout/headerBar.jsx'
import SideBar from './components/layout/sideBar.jsx'

//Import sections
import HomeSection from './components/sections/homeSection.jsx'
import SurveySection from './components/sections/surveySection.jsx'
import ResultsSection from './components/sections/resultsSection.jsx'
import RoadmapSection from './components/sections/roadmapSection.jsx'
import ContactSection from './components/sections/contactSection.jsx'
import AdminSection from './components/sections/adminSection.jsx'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

		//React classes methods do not auto-bind to class. So if we don't add this.sectionHandler = this.sectionHandler.bind(this) 
		//in constructor, this inside the sectionHandler function will reference the function closure, not the class. 
		this.sectionHandler = this.sectionHandler.bind(this)
		this.updateUserInfoHandler = this.updateUserInfoHandler.bind(this)
		this.writeFirebaseData = this.writeFirebaseData.bind(this)
		this.authenticateUser = this.authenticateUser.bind(this);

        this.state={
			sectionVisible:'Home',
			name: '',
			email: '',
			organisation: '',
			industry: '',
			spend: '',
			dateTime: new Date(),
            strategyAnswers: [],
            processAnswers: [],
            peopleAnswers: [],
            technologyAnswers: [],
			riskComplianceAnswers: [],
			adminMode: false
        }
	}

	componentDidMount() {		
		//Store empty results (Will load in future with login credentials)
		localStorage.setItem("resultsStrategy", "[0,0,0,0,0,0]");
	}
	
	writeFirebaseData = () => {
		var key = this.state.organisation
		var dbVarObj = {
			name: this.state.name,
			email: this.state.email,
			organisation: this.state.organisation,
			industry: this.state.industry,
			spend: this.state.spend,
			dateTime: this.state.dateTime,
            strategyAnswers: this.state.strategyAnswers,
            processAnswers: this.state.processAnswers,
            peopleAnswers: this.state.peopleAnswers,
            technologyAnswers: this.state.technologyAnswers,
            riskComplianceAnswers: this.state.riskComplianceAnswers
		};

		var dbObj = {
			userInfo: dbVarObj
		}
		
		//alert(JSON.stringify(dbObj));		

		if(this.state.name == '') {
			alert("Please enter your name on the 'Home' page.");
		} else if(this.state.email == '') {
			alert("Please enter your email on the 'Home' page.");
		} else if(this.state.organisation == '') {
			alert("Please enter your organisation on the 'Home' page.");
		} else if(this.state.industry == '') {
			alert("Please enter your industry on the 'Home' page.");
		} else if(this.state.spend == '') {
			alert("Please enter your organisation's annual spend range on the 'Home' page.");
		} else {
			firebase.database().ref('/clients/' + this.state.organisation).set(dbObj);
		}
	}

	getFirebaseData = () => {
		let ref = firebase.database().ref('/');
		ref.on('value', snapshot => {
			const data = snapshot.val();
			alert('DATA RETRIEVED');
			alert(data)
		});
	}


	authenticateUser = (username, password) => {
		const that = this;
		let ref = firebase.database().ref('/');
		
		ref.on('value', snapshot => {
			const data = snapshot.val();
			if((username === data.admin.email) && (username === data.admin.email)) {
				alert('Correct credentials')
			} else {
				alert('Credentials are incorrect, please try again.')
			}
		});
	}
	
	updateUserInfoHandler = (name, email, organisation, industry, spend) => {
		this.setState({
			name: name,
			email: email,
			organisation: organisation,
			industry: industry,
			spend: spend
		})
	}


	sectionHandler(value) {
		this.setState({
			sectionVisible: value
		})
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
    }

	sectionVisibleBool() {
		if(this.state.sectionVisible === 'Home') {
			return <HomeSection 
				updateUserInfoHandler={this.updateUserInfoHandler}
				/>
		} else if(this.state.sectionVisible === 'Survey'){			
			return <SurveySection answersHandler={this.answersHandler} strategyAnswers={this.state.strategyAnswers} processAnswers={this.state.processAnswers} peopleAnswers={this.state.peopleAnswers} technologyAnswers={this.state.technologyAnswers} riskComplianceAnswers={this.state.riskComplianceAnswers}/>
		} else if(this.state.sectionVisible === 'Results'){		
			return <ResultsSection name={this.state.name} email={this.state.email} strategyAnswers={this.state.strategyAnswers} processAnswers={this.state.processAnswers} peopleAnswers={this.state.peopleAnswers} technologyAnswers={this.state.technologyAnswers} riskComplianceAnswers={this.state.riskComplianceAnswers}/>
		} else if(this.state.sectionVisible === 'Roadmap'){		
			return <RoadmapSection />
		} else if(this.state.sectionVisible === 'Contact'){	
			return <ContactSection />
		} else if(this.state.sectionVisible === 'Admin'){	
			return <AdminSection adminMode={this.state.adminMode} authenticateUser={this.authenticateUser}/>
		}
	}

	render() {
		return (
			<div style={{height:'100vh', textAlign:'center'}}>
				<div className="appBackground">
					<HeaderBar writeFirebaseData={this.writeFirebaseData}/>
					<div style={{display:'flex', flexDirection:'row'}}>
						<div>
							<SideBar sectionHandler={this.sectionHandler} sectionVisible={this.state.sectionVisible}/>
						</div>
						<div style={{textAlign:'center', width:'93vw', marginLeft:'7vw', height: '93vh', overflowY: 'scroll'}}>
							{this.sectionVisibleBool('home')}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
