import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../actions/users';
import LeftMenu from '../components/LeftMenu';
import AppBar from 'material-ui/AppBar'
import Users from '../components/Users'

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {

    render() {
        const {actions, menu, params, users} = this.props;

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
                            <Users users={users} actions={actions}/>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    users: PropTypes.object.isRequired,
    menu: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        menu: state.menu,
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
