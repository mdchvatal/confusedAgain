import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import { fetchByZip } from '../redux/ActionCreators';
import Search from './SearchComponent';


const mapStateToProps = (state) => {
	return {
        weatherData: state.reducer.weatherData,
		zipForm: state.zipForm
	}
}

const mapDispatchToProps = (dispatch) => ({
    fetchByZip: (zip) => {dispatch(fetchByZip(zip))},
    resetForm: () => {dispatch(actions.reset('zipForm'))}
})

class MainComponent extends Component{

    constructor(props) {
      	super(props);
    }

    render() {
        return (
            <div>
                <Switch location={this.props.location}>
                    <Route path='/home' component={() => 
                        <Search fetchByZip={this.props.fetchByZip} 
                            zipForm={this.props.zipForm}
                            resetForm={this.props.resetForm}
                            weatherData={this.props.weatherData}/>}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));