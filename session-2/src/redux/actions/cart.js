export const Cart = data => ({
  type: 'AddCart',
  payload: data,
});

export const RemoveFromCart = id => ({
  type: 'RemoveCart',
  id,
});
