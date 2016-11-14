import React, {Component, PropTypes} from 'react';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';
import moment from 'moment'
import {Card, CardTitle, CardText} from 'material-ui/Card';

const cardStyle = {
    marginTop:30
};

class FlightSearch extends Component {
    componentWillMount() {
        this.props.actions.getAllFlights();
    }

    handleChange(e, id, carrier) {
        this.props.actions.setCarrierFilter(carrier);
    }

    getCardTitle(item){
        return item.direction.from + " → " + item.direction.to;
    }

    getDepartureText(item){
        return 'Departure: ' + moment(item.departure).format('lll')
    }

    getArrivalText(item){
        return 'Arrival: '  + moment(item.arrival).format('lll');
    }

    render() {
        const {carriers, filter, filteredFlights} = this.props.flights;
        return (
            <div>
                <SelectField value={filter.carrier} onChange={this.handleChange.bind(this)} floatingLabelText="Carrier">
                    {carriers.map(item =>
                        <MenuItem primaryText={item} value={item} key={item}/>
                    )}
                </SelectField>
                {filteredFlights.map(item =>
                    <Card key={item.id} style={cardStyle}>
                        <CardTitle title={this.getCardTitle(item)} subtitle={item.carrier} />
                        <CardText>
                            <div>{this.getDepartureText(item)}</div>
                            <div>{this.getArrivalText(item)}</div>
                        </CardText>
                    </Card>
                )}
            </div>
        );
    }
}

FlightSearch.propTypes = {
    flights: PropTypes.object.isRequired
};

export default FlightSearch;
