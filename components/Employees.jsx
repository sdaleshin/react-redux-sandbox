import React, {Component, PropTypes} from 'react';
import MuiEditableTable from "mui-editable-table";

class Employees extends Component {
    render() {

        let colSpec = [
            {
                title: 'First Name',
                fieldName: 'firstName',
                inputType: "TextField",
                width: 200
            },
            {
                title: 'Last Name',
                fieldName: 'lastName',
                inputType: "TextField",
                width: 200
            },
            {
                title: 'Department',
                fieldName: 'department',
                inputType: "SelectField",
                selectOptions: ["Mr", "Mrs", "Miss", "Other"],
                width: 200,
                defaultValue: 'Mr'
            }
        ];

        let onChange = (data)=> {
            console.log(data)
        }

        return (
            <MuiEditableTable
                colSpec={colSpec}
                rowData={rowData}
                reorderable={false}
                onChange={onChange}
            />
        );
    }
}

Employees.propTypes = {
    employees: PropTypes.array.isRequired,
    departments: PropTypes.array.isRequired
};

export default Employees;
