import React, { Component } from 'react'




class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state={
			sectionVisible: this.props.sectionVisible
        }
    }
    

    render() {
        return (
            <div style={{
                width:'7vw',
                position: 'fixed',
                zIndex: 1,
                color:'white',
                height: '93vh',
                top:'7vh',
                left: '0',
                backgroundColor:'rgb(40,40,40)',
                overflowX: 'hidden',
                cursor:'pointer',
                textAlign:'center'

            }}>
                <div onClick={() => {this.props.sectionHandler('Home')}} 
                    className = {"sideBarTile " + (this.props.sectionVisible==='Home' ? 'sideBarTileActive' : 'sideBarTileInactive')}
                    style={{padding:20}}>
                    <i className="fa fa-fw fa-home sideBarIcon"></i>
                    <br/>
                    <span className="sideBarText">Home</span>                    
                </div>
                <div onClick={() => {this.props.sectionHandler('Survey')}} 
                    className = {"sideBarTile " + (this.props.sectionVisible==='Survey' ? 'sideBarTileActive' : 'sideBarTileInactive')}
                    style={{padding:20}}>
                    <i className="fa fa-fw fa-list-alt sideBarIcon"></i>
                    <br/>
                    <span className="sideBarText">Survey</span>                       
                </div>
                <div onClick={() => {this.props.sectionHandler('Results')}} 
                    className = {"sideBarTile " + (this.props.sectionVisible==='Results' ? 'sideBarTileActive' : 'sideBarTileInactive')}
                    style={{padding:20}}>
                    <i className="fa fa-fw fa-bar-chart sideBarIcon"></i>
                    <br/>
                    <span className="sideBarText">Results</span>               
                </div>
                <div onClick={() => {this.props.sectionHandler('Contact')}} 
                    className = {"sideBarTile " + (this.props.sectionVisible==='Contact' ? 'sideBarTileActive' : 'sideBarTileInactive')}
                    style={{padding:20}}>
                    <i className="fa fa-fw fa-info-circle sideBarIcon"></i>
                    <br/>
                    <span className="sideBarText">Contact</span>                   
                </div>   
                
                <div onClick={() => {this.props.sectionHandler('Admin')}} 
                    className = {"sideBarTile " + (this.props.sectionVisible==='Admin' ? 'sideBarTileActive' : 'sideBarTileInactive')}
                    style={{padding:20}}>
                    <i className="fa fa-fw fa-lock sideBarIcon" style={{color:'rgb(100,100,100)'}}></i>
                    <br/>
                    <span className="sideBarText" style={{color:'rgb(100,100,100)'}}>Admin</span>                   
                </div>                
            </div>
        )
    }
}

export default SideBar;
