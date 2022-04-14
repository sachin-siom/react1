
import React, { Component } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 

class WelcomeComponent extends Component {

constructor(props){
    super(props)
    this.retirveWelcomeMessage = this.retirveWelcomeMessage.bind(this)
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    this.handlerError = this.handlerError.bind(this)
    this.state = {
        welcomeMsg : ''
    }
   
}

    render() {
        return (
            <>
            <h1>Welcome!</h1>
            <div className="container">
            Welcome {this.props.params.name} you can manage your points here
            </div>
            <div className="container">
                   {this.state.welcomeMsg}
            </div>
            </>
        )
    }

    retirveWelcomeMessage(){
        this.setState({welcomeMsg: 'Welocme to the home'})
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMsg: response.data.name})
    }

    handlerError(error){
        console.log(error.response)
        let errorMsg = '';
        if(error.message)
            errorMsg += error.message
        if(error.response && error.response.data)
            errorMsg += error.response.data

        this.setState({welcomeMsg: errorMsg})
    }

   /* handleSuccessfulResponse(response){
        this.setState({welcomeMsg: response.data})
    }*/
}

export default WelcomeComponent