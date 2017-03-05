import React, {Component, PropTypes} from 'react';
import MuiEditableTable from "mui-editable-table";

class Departments extends Component {
    render() {

        let colSpec = [
            {
                title: 'Name',
                fieldName: 'name',
                inputType: "TextField",
                width: 200
            }
        ];

        let onChange = (data)=> {
            console.log(data)
        }
        return (
            <MuiEditableTable
                colSpec={colSpec}
                rowData={this.props.departments}
                reorderable={false}
                onChange={onChange}
            />
        );
    }
}

Departments.propTypes = {
    departments: PropTypes.array.isRequired
};

export default Departments;
