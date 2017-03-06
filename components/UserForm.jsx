import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const validationRules = {
    fullName(value){
        if (!value) {
            return 'Full Name is required';
        }
        if (value.length > 100) {
            return 'Full Name must be less than 100 chars';
        }
    },
    birthdate(value){
        if (!value) {
            return 'Birthdate is required';
        }
    },
    phone(value) {
        let pattern = /^((\+7|7|8)+([0-9]){10})$/gm;
        if(value && !pattern.test(value)){
            return 'Incorrect phone format'
        }

    }
}

class UserForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            errorTexts: {
                fullName: '',
                birthdate: '',
                phone: ''
            }
        };
    }

    handleBlur = (e) => {
        const field = e.target.name;
        this.validateField(field);
    };

    validateField(field){
        let errorText = this.validate(field);
        let fieldErrorText = {};
        fieldErrorText[field] = errorText;
        this.setState({errorTexts: Object.assign({}, this.state.errorTexts, fieldErrorText)});
    };

    handleChange = (e) => {
        const field = e.target.name;
        const user = this.props.user;
        user[field] = e.target.value;
        this.props.onChange(user, this.isValid());
        this.validateField(field);
    };

    validate = (field) => {
        return validationRules[field] && validationRules[field](this.props.user[field]);
    };

    isValid = () => {
        return !this.validate('fullName') && !this.validate('birthdate') && !this.validate('phone');
    };

    renderTextField(user, errorTexts, label, field) {
        field = field || label.toLowerCase();

        return (
            <TextField
                hintText={label}
                floatingLabelText={label}
                value={user[field]}
                errorText={errorTexts[field]}
                name={field}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
        )
    }

    render() {
        let {user}= this.props;
        let {errorTexts} = this.state;

        return (
            <div>
                {this.renderTextField(user, errorTexts, 'Full Name', 'fullName')}
                <br />
                {this.renderTextField(user, errorTexts, 'Birthdate')}
                <br />
                {this.renderTextField(user, errorTexts, 'Address')}
                <br />
                {this.renderTextField(user, errorTexts, 'City')}
                <br />
                {this.renderTextField(user, errorTexts, 'Phone')}
            </div>
        );
    }
}

UserForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default UserForm;
