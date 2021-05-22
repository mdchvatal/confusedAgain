import React, {Component} from 'react';
import ZipInfo from './ZipInfo';
import {Breadcrumb, BreadcrumbItem, Button, Label,  Col, Row} from 'reactstrap';
import {Control, Form, Errors, actions} from 'react-redux-form';

class Search extends Component {
    constructor(props) {
        super(props);
            
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.fetchByZip(values);
        console.log("Current state is: " + JSON.stringify(values));
        alert("Your entries are: " + JSON.stringify(values));
        this.props.resetForm();
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Let's Check The Weather!</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="zipForm" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="zipForm" md={2}>Enter Zip Code</Label>
                                <Col md={10}>
                                    <Control.text model=".zipForm" id="zipForm" name="zipForm" placeholder="Zip" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">Get Weather</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="row">
                    <ZipInfo weatherInfo={this.props.weatherData}/>
                </div>

            </div>
        );
    }
}
export default Search;