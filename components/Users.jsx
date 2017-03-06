import React, {Component, PropTypes} from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import UserModal from './UserModal'

class Users extends Component {
    handleOpen = () => {
        this.props.actions.showUserModal();
    };

    handleCancel = () => {
        this.props.actions.hideUserModal();
    };

    handleSubmit = () =>{
        this.props.actions.hideUserModal();
    };

    render() {

        let {allUsers, open} = this.props.users;

        return (
            <div>
                <Table selectable={false}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>Full Name</TableHeaderColumn>
                            <TableHeaderColumn>Birthdate</TableHeaderColumn>
                            <TableHeaderColumn>Address</TableHeaderColumn>
                            <TableHeaderColumn>City</TableHeaderColumn>
                            <TableHeaderColumn>Phone</TableHeaderColumn>
                            <TableHeaderColumn></TableHeaderColumn>
                            <TableHeaderColumn></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {allUsers.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.fullName}</TableRowColumn>
                                <TableRowColumn>{row.birthdate}</TableRowColumn>
                                <TableRowColumn>{row.address}</TableRowColumn>
                                <TableRowColumn>{row.city}</TableRowColumn>
                                <TableRowColumn>{row.phone}</TableRowColumn>
                                <TableRowColumn>
                                    <FlatButton label="Edit" primary={true}/>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <FlatButton label="Delete" secondary={true}/>
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <FloatingActionButton onTouchTap={this.handleOpen} style={{position: 'fixed', bottom: 30, right: 30}}>
                    <ContentAdd />
                </FloatingActionButton>
                <UserModal
                    user={allUsers[0]}
                    open={open}
                    onCancelClick={this.handleCancel}
                    onSubmitClick={this.handleSubmit}
                />
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.object.isRequired
};

export default Users;
