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

    handleCancel = () => {
        this.props.onCancelClick();
    };
    handleSubmit = () =>{
        this.props.onSubmitClick();
    };
    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCancel}
            />,
            <FlatButton
                label="Submit"
                type="submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSubmit}
            />
        ];

        let {user, open} = this.props;

        return (
            <Dialog
                actions={actions}
                modal={true}
                open={this.props.open}
                autoScrollBodyContent={true}
            >
                <div>
                    <TextField
                        hintText="Full Name"
                        floatingLabelText="Full Name"
                        value={user.fullName}
                    />
                    <br />
                    <TextField
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
                </div>
            </Dialog>
        );
    }
}

UserModal.propTypes = {
    user: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onSubmitClick: PropTypes.func.isRequired
};

export default UserModal;
