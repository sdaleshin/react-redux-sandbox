import {
    REQUEST_ALL_FLIGHTS,
    REQUEST_FILTERED_FLIGHTS,
    REQUEST_CARRIERS,
    RECEIVE_ALL_FLIGHTS,
    SET_CARRIER_FILTER
} from '../constants/ActionTypes';
const initialState = {
    allFlights: [],
    carriers: [],
    filteredFlights: [],
    filter: {
        carrier: 'All'
    }
};

export default function flights(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ALL_FLIGHTS:
            return state;
        case RECEIVE_ALL_FLIGHTS:
            let carriers = action.allFlights.map(f => f.carrier);
            return Object.assign({}, state, {
                carriers: [state.filter.carrier,
                    ...carriers.filter((value, index)=> {
                        return carriers.indexOf(value) === index
                    })],
                allFlights: action.allFlights,
                filteredFlights: action.allFlights
            });
        case SET_CARRIER_FILTER:
            return Object.assign({}, state, {
                filter: Object.assign({}, state.filter,{
                    carrier: action.carrier
                }),
                filteredFlights: state.allFlights.filter((f) =>{
                    return action.carrier === 'All' || f.carrier === action.carrier
                })
            });
        default:
            return state;
    }
}
