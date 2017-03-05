import React, {Component, PropTypes} from 'react';
import MuiEditableTable from "mui-editable-table";

class Grid extends Component {
    render() {

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

Grid.propTypes = {};

export default Grid;
