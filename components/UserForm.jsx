import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment'

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
        if (value && !pattern.test(value)) {
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
        this.validateField(e.target.name);
    };

    validateField(field) {
        let errorText = this.validate(field);
        let fieldErrorText = {};
        fieldErrorText[field] = errorText;
        this.setState({errorTexts: Object.assign({}, this.state.errorTexts, fieldErrorText)});
    };

    handleFieldChange = (field, value) => {
        const user = this.props.user;
        user[field] = value;
        this.props.onChange(user, this.isValid());
        this.validateField(field);
    };

    handleChange = (e) => {
        this.handleFieldChange(e.target.name, e.target.value);
    };

    validate = (field) => {
        return validationRules[field] && validationRules[field](this.props.user[field]);
    };

    isValid = () => {
        return !this.validate('fullName') && !this.validate('birthdate') && !this.validate('phone');
    };

    handleDateChange = (e, date) => {
        this.handleFieldChange('birthdate', date);
    };

    handleDatePickerDismiss = () => {
        this.validateField('birthdate');
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
        let minDate = new Date();
        minDate.setFullYear(1900);

        let maxDate = new Date();
        let {birthdate} = user;
        if(birthdate){
            birthdate = moment(user['birthdate']).toDate()
        }

        return (
            <div>
                {this.renderTextField(user, errorTexts, 'Full Name', 'fullName')}
                <br />
                <DatePicker
                    floatingLabelText="Birthdate"
                    name="birthdate"
                    minDate={minDate}
                    maxDate={maxDate}
                    value={birthdate}
                    onChange={this.handleDateChange}
                    onDismiss={this.handleDatePickerDismiss}
                    errorText={errorTexts['birthdate']}
                />
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
