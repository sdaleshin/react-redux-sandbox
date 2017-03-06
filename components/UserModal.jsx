import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import UserForm from './UserForm'

class UserModal extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: Object.assign({}, this.props.user),
            disabled: !this.props.user.id
        };
    }

    handleCancel = () => {
        this.props.onCancelClick();
    };
    handleSubmit = () => {
        this.props.onSubmitClick(this.state.user);
    };

    handleChange = (user, isValid) => {
        this.setState({user: user, disabled: !isValid});
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
                disabled={this.state.disabled}
            />
        ];

        let {user, open} = this.state;

        return (
            <Dialog
                actions={actions}
                modal={true}
                open={this.props.open}
                autoScrollBodyContent={true}
            >
                <UserForm user={user} onChange={this.handleChange}/>
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
