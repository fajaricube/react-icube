// Initial States
const initialState = {
    app: {
        _name: 'FStore',
        _version: '1.0 Beta',
        _owner: 'Fajar'
    },
};


function rootReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default rootReducer;
