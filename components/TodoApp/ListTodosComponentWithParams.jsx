import React, { Component } from "react";
import DrawDetails from './DrawDetails.jsx'

class ListTodosComponentWithParams extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <DrawDetails/>
        )
    }
}
export default ListTodosComponentWithParams