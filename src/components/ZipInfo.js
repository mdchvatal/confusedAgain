import React from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';


const ZipInfo = (props) => {
    if (props.zipForm != null) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.zipForm}</h4>
                </div>
            </div>
        );
    } else {
        return(
            <div></div>
        )
    }
}

export default ZipInfo;