import React, {Component, PropTypes} from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import moment from 'moment'
import UserModal from './UserModal'

class Users extends Component {
    componentWillMount() {
        this.props.actions.getUsers();
    }

    handleAdd = () => {
        this.props.actions.showUserModal();
    };

    handleCancel = () => {
        this.props.actions.hideUserModal();
    };

    handleEdit = (user) => {
        this.props.actions.showUserModal(user);
    };

    handleDelete = (userId) => {
        this.props.actions.deleteUser(userId);
    };

    handleSubmit = (user) => {
        if (user.id) {
            this.props.actions.updateUser(user);
        } else {
            this.props.actions.addUser(user);
        }
        this.props.actions.hideUserModal();
    };

    render() {

        let {allUsers, open, user} = this.props.users;

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
                                <TableRowColumn>{moment(row.birthdate).format('L')}</TableRowColumn>
                                <TableRowColumn>{row.address}</TableRowColumn>
                                <TableRowColumn>{row.city}</TableRowColumn>
                                <TableRowColumn>{row.phone}</TableRowColumn>
                                <TableRowColumn>
                                    <FlatButton
                                        label="Edit"
                                        primary={true}
                                        onTouchTap={() => {
                                            this.handleEdit(row)
                                        }}
                                    />
                                </TableRowColumn>
                                <TableRowColumn>
                                    <FlatButton
                                        label="Delete"
                                        secondary={true}
                                        onTouchTap={() => {
                                            this.handleDelete(row.id)
                                        }}
                                    />
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <FloatingActionButton onTouchTap={this.handleAdd} style={{position: 'fixed', bottom: 30, right: 30}}>
                    <ContentAdd />
                </FloatingActionButton>
                {user &&
                <UserModal
                    user={user}
                    open={open}
                    onCancelClick={this.handleCancel}
                    onSubmitClick={this.handleSubmit}
                />
                }
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.object.isRequired
};

export default Users;
