const defaultState = JSON.parse(localStorage.getItem('customer-data')) || [];
const registerReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_USER':
      return state.register;

    case 'AddUser':
      if (state.length > 0) {
        return state;
      }
      localStorage.setItem('customer-data', JSON.stringify(payload));
      return {
        ...payload,
      };

    default:
      return state;
  }
};

export default registerReducer;
