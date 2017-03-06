import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';

class UserForm extends Component {

    handleChange = (e) => {
        const field = e.target.name;
        const user = this.props.user;
        user[field] = e.target.value;
        this.props.onChange(user);
    };

    renderTextField(user, label, field){
        field = field || label.toLowerCase();

        return (
            <TextField
                hintText={label}
                floatingLabelText={label}
                value={user[field]}
                name={field}
                onChange={this.handleChange}
            />
        )
    }

    render() {
        let {user}= this.props;

        return (
            <div>
                {this.renderTextField(user, 'Full Name', 'fullName')}
                <br />
                {this.renderTextField(user, 'Birthdate')}
                <br />
                {this.renderTextField(user, 'Address')}
                <br />
                {this.renderTextField(user, 'City')}
                <br />
                {this.renderTextField(user, 'Phone')}
            </div>
        );
    }
}

UserForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default UserForm;
