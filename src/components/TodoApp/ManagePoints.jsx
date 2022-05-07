import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { WithContext as ReactTags } from 'react-tag-input';
import { includeNumbers, onlyRetailerId } from './Constant';
import {
    Button,
    Box,
    Card,
    CardContent,
    CardHeader,
    Radio,
    Divider,
    FormControlLabel,
    Grid,
    Typography,
    TextField,
} from "@mui/material";

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class ManagePoints extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tags: [],
            include: false,
            reset: false,
            suggestions: [
                { id: '1', text: '1' },
                { id: '2', text: '2' },
                { id: '3', text: '3' },
                { id: '4', text: '4' },
                { id: '5', text: '5' },
                { id: '6', text: '6' }
            ]
        }
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    componentDidMount() {
        AuthenticationService.executeRetailers(`${onlyRetailerId}/1`)
            .then((response) => {
                console.log(response.data.includeNumbers); let var1 = response.data.includeNumbers;
                var regex = /([^\[\],\s])/g;
                var json = var1.replace(regex, '"$&"');
                var array = JSON.parse(var1);
                const orderInputObjects = [];
                array.forEach(function (v, i, a) {
                    orderInputObjects.push({ 'id': a[i], 'text': a[i] });
                });

                console.log(typeof orderInputObjects)
                this.setState({ tags: orderInputObjects })
            })
            .catch((error) => { console.log('problem in retiving retailers id'); this.setState({ dataFetchError: true }) });
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice()
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        this.setState({ tags: newTags });
    }

    handleReset() {
        this.setState({ tags: [] })
        let onlyNum = []
        AuthenticationService.executeIncludeNumbers(includeNumbers, onlyNum)
            .then((response) => { this.setState({reset: true}); console.log('data updated successsfully') })
            .catch((error) => { })
    }

    setProperty(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit() {
        const tags = [...this.state.tags];
        let onlyNum = tags.map((x) => x.id)
        console.log(onlyNum)
        AuthenticationService.executeIncludeNumbers(includeNumbers, onlyNum)
            .then((response) => { this.setState({include: true}); console.log('data updated successsfully') })
            .catch((error) => { })
    }

    render() {
        const { tags, suggestions } = this.state;
        return (
            <>
                <center>

                    <Card style={{ width: "90%", marginTop: '60px' }}>
                        <CardHeader
                            // subheader="Manage "
                            title="Manage Points" />
                        <Divider />
                        {this.state.include && (<div className="alert alert-success">Number Included Successfully</div>)}
                        {this.state.reset && (<div className="alert alert-danger">Number Removed Successfully</div>)}
                        <CardContent className="table-responsive">
                            <Grid container spacing={6} wrap="wrap">
                                <Grid item
                                    md={16}
                                    sm={18}
                                    xs={20}
                                >
                                    <div className={ReactTags}>
                                        <ReactTags tags={tags}
                                            placeholder="Add Numbers..."
                                            allowUnique={true}
                                            suggestions={suggestions}
                                            inputFieldPosition="bottom"
                                            handleDelete={this.handleDelete}
                                            handleAddition={this.handleAddition}
                                            handleDrag={this.handleDrag}
                                            delimiters={delimiters} />

                                    </div>
                                    <div>
                                        <Button type="submit" variant="contained" color="primary" onClick={this.handleSubmit} style={{ margin: 8 }} >
                                            Include Number
                                        </Button>
                                        <Button variant="contained" onClick={this.handleReset}>
                                            Reset
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </center>
            </>
        )
    }
}

export default ManagePoints