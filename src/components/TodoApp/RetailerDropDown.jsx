import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import React, { Component }  from 'react';
import AuthenticationService from "./AuthenticationService";
import { onlyRetailerIds } from './Constant';


class RetailerDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropDownValue: '',
            retailIds: [
            ],
            dataFetchError : false
        };
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        AuthenticationService.executeRetailers(`${onlyRetailerIds}`)
        .then((response) => { this.setState({ retailIds: response.data }); })
        .catch((error) => {console.log('problem in retiving retailers id'); this.setState({dataFetchError : true})});
    }

    handleChange(event) {
        this.setState({ dropDownValue: event.target.value })
        this.props.parentCallback(event.target.value);
        event.preventDefault();
    }

    render() {
        const { retailIds } = this.state;
        let retailIdsLists = retailIds.length > 0
            && retailIds.map((item, i) => {
                return (
                    <option key = {i} value={item.id}>{item.id}</option>
                )
            }, this);
        return (
            <div>
                {this.state.dataFetchError && <div className="alert alert-warning">Unable to fetch the Retail Id's</div>}
                <InputLabel style={{ margin: 8, fontSize:18}} variant="standard" htmlFor="uncontrolled-native">
                    Retails Ids
                </InputLabel>
                <NativeSelect
                    placeholder="Select ID"
                    style={{ margin: 8, fontSize:18, width:100 }}
                    value={this.state.dropDownValue}
                    onClick={this.handleChange}
                    onChange={this.handleChange}
                    onLoad={this.handleChange}
                    inputProps={{
                        name: 'retailids',
                        id: 'uncontrolled-native',
                    }}
                >
                    {retailIdsLists}
                </NativeSelect>
            </div>
        )
    }
}

export default RetailerDropDown