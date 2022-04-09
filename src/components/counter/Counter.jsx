import React, { Component } from 'react';
import propType from 'prop-types'
import './Counter.css'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            counter : 0
        }
        this.increament = this.increament.bind(this)
        this.decreament = this.decreament.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
      return (
        <div className="counter">
          <CounterButton by = {1} increamentBy = {this.increament} decreamentBy = {this.decreament}/>
          <CounterButton by = {5} increamentBy = {this.increament} decreamentBy = {this.decreament}/>
          <CounterButton by = {10} increamentBy = {this.increament} decreamentBy = {this.decreament}/>
          <div><button className = "reset" onClick={this.reset}>Reset</button></div>
          <span className='count' >{this.state.counter}</span>
        </div>
      );
    }

    reset = () => {
        this.setState({counter: 0})
    }

    increament = (by) => {
        this.setState(
            (prevState) => {
            return {counter: prevState.counter + by}
            }
        )
    }

    decreament = (by) => {
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - by}
            }
        ) 
    }
}

class CounterButton extends Component {
    constructor(){
        super()
        this.state = {
            counter : 0
        }
        this.increament = this.increament.bind(this)
        this.decreament = this.decreament.bind(this)
    }
    render = () => {
        return (
            <div className = "counter">
                <button onClick={this.increament}>+{this.props.by}</button>
                <button onClick={this.decreament}>-{this.props.by}</button>
            </div>
        )
    } 

    increament = () => {
        this.setState({
            counter: this.state.counter + this.props.by
        })
        this.props.increamentBy(this.props.by)
    }

    decreament = () => {
        this.setState({
            counter: this.state.counter - this.props.by
        })
        this.props.decreamentBy(this.props.by)
    }

}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propType = {
    by : propType.number
}

export default Counter