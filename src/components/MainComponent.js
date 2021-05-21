import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import { fetchByZip } from '../redux/ActionCreators';
import Search from './SearchComponent';


const mapStateToProps = (state) => {
	return {
		zipForm: state.zipForm,
	}
}

const mapDispatchToProps = (dispatch) => ({
    fetchByZip: () => {dispatch(fetchByZip)}
})

class MainComponent extends Component{

    constructor(props) {
      	super(props);
    }

    render() {
        return (
            <div>
                <Switch location={this.props.location}>
                    <Route path='/home' component={() => <Search fetchByZip={this.props.fetchByZip} zipForm={this.props.zipForm}/>}/>
                    
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));