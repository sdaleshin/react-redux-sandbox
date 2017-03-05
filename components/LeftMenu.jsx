import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import SelectableList from './SelectableList'
import {ListItem} from 'material-ui/List'
import {Link} from 'react-router'

class LeftMenu extends Component {

    render() {
        let {leftMenu} = this.props.menu;
        let listItems = leftMenu.map((text, index)=> {
            let route = '/' + text.toLowerCase();
            return (
                <ListItem primaryText={text}
                          value={route}
                          containerElement={<Link to={route}/>}
                          key={index}
                >
                </ListItem>
            );
        });

        return (
            <Drawer open={true}>
                <AppBar title="Admin"/>
                <SelectableList value={location.pathname}>
                    {listItems}
                </SelectableList>
            </Drawer>
        );
    }
}

LeftMenu.propTypes = {
    menu: PropTypes.object.isRequired
};

export default LeftMenu;
