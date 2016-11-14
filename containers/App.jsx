import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FlightSearch from '../components/FlightSearch';
import * as FlightActions from '../actions/flights';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
    render() {
        const {actions, flights} = this.props;
        return (
            <div className="container">
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <FlightSearch flights={flights} actions={actions} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    flights: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        flights: state.flights
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(FlightActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
