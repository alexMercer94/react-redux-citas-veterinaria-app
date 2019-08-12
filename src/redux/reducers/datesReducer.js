const initialState = {
    dates: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_DATE':
            return {
                ...state,
                dates: [...state.dates, action.payload]
            };

        default:
            return state;
    }
}
