import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Control, Form, Errors, actions} from 'react-redux-form';


class ZipInfo extends Component{
    constructor(props) {
        super(props);
    } 

    render() {
        if (this.props.weatherInfo) {
            return(
                <div>
                    <Card>
                    <CardBody>
                        <CardText>{this.props.weatherInfo}</CardText>
                    </CardBody>
                    </Card>
                </div>
            );
        } else {
            return(
                <div><h4>Let's check the weather</h4></div>
            )
        }
    }
}

export default ZipInfo;