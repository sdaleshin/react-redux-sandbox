import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as FlightActions from '../actions/flights';
import LeftMenu from '../components/LeftMenu';
import AppBar from 'material-ui/AppBar'
import Departments from '../components/Departments'
import Employees from '../components/Employees'

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {

    render() {
        const {actions, menu, params, departments, employees} = this.props;

        let grid;
        switch (params.filter){
            case 'departments':
                grid = <Departments departments={departments}/>
                break;
            case 'employees':
                grid = <Employees employees={employees} departments={departments}/>
                break;
        }

        return (
            <div className="container">
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <AppBar
                            title="Title"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                        <LeftMenu menu={menu}/>
                        <div className="main-region">
                            {grid}
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    flights: PropTypes.object.isRequired,
    menu: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        flights: state.flights,
        menu: state.menu
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
