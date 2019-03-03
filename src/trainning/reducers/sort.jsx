let initialState = {
    by: 'status',
    value: 1
};


var myReducer = (state = initialState, action) => {
    if (action.type == 'SORT') {
        let {by, value } = action.sort;
        return {
            sort: {by, value}
        }
    }
    return state;
}

export default myReducer;
