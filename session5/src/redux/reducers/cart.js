const initalState = {
  Cart: [],
};

const cartReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'RemoveCart':
      const withoutDeletedProduct = state.Cart.filter(
        (product) => product.product_id !== payload.product_id
      );    
      return {
        ...state,
        Cart: withoutDeletedProduct,
      };

    case 'AddCart':
      let idAlreadyExists = false;
      let Cart = state.Cart.slice();

      state.Cart.map((item, key) => {
        if (item.product_id === payload.product_id) {
          idAlreadyExists = true;
        }
      });

      if (idAlreadyExists) {
        console.log('ada');
        let objIndex = state.Cart.findIndex(obj => obj.product_id == payload.product_id);
        state.Cart[objIndex].qty = payload.qty;
        console.log(state.Cart[objIndex].qty);
      } else {
        Cart.push(payload);
        console.log('tidakada');
      }
      return {
        ...state,
        Cart,
      };

    default:
      return state;
  }
};

export default cartReducer;
