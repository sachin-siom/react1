import { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { onlyRetailerIds } from './Constant'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';


class RetailerDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropDownValue: '',
            retailIds: [
            ],
            dataFetchError : false
        };
        this.handleDropDownChange = this.handleDropDownChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        AuthenticationService.executeRetailers(`${onlyRetailerIds}`)
        .then((response) => { this.setState({ retailIds: response.data }); })
        .catch((error) => {console.log('problem in retiving retailers id'); this.setState({dataFetchError : true})});
    }

    handleDropDownChange(event) {
        this.setState({ dropDownValue: event.target.value })
        this.props.parentCallback(event.target.value);
        event.preventDefault();
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
                    <option key = {i} value={item.retailId}>{item.retailId}</option>
                )
            }, this);
        return (
            <div>
                {this.state.dataFetchError && <div className="alert alert-warning">Unable to fetch the Retail Id's</div>}
                <InputLabel style={{ margin: 8, fontSize:18}} variant="standard" htmlFor="uncontrolled-native">
                    Retails Ids
                </InputLabel>
                <NativeSelect
                    onChange={this.handleChange}
                    defaultValue={0}
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