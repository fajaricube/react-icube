const defaultState = [];
const registerReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_USER':
      return state.register;

    case 'Logout':
      localStorage.removeItem('customer-data');
      return (state.register = undefined);

    default:
      return state;
  }
};

export default registerReducer;
