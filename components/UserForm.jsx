import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class UserModal extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: this.props.user
        };
    }

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                type="submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />
        ];

        let {user, open} = this.props;

        return (
            <Dialog
                actions={actions}
                modal={true}
                open={open}
                autoScrollBodyContent={true}
            >
                <TextField
                    key="1"
                    hintText="Full Name"
                    floatingLabelText="Full Name"
                    value={user.fullName}
                />
                <br />
                <TextField
                    key="2"
                    hintText="Birthdate"
                    floatingLabelText="Birthdate"
                    value={user.birthdate}
                />
                <br />
                <TextField
                    hintText="Address"
                    floatingLabelText="Address"
                    value={user.address}
                />
                <br />
                <TextField
                    hintText="City"
                    floatingLabelText="City"
                    value={user.city}
                />
                <br />
                <TextField
                    hintText="Phone"
                    floatingLabelText="Phone"
                    value={user.phone}
                />
            </Dialog>
        );
    }
}

UserModal.propTypes = {
    user: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
};

export default UserModal;
