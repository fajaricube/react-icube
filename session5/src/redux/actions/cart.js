export const Cart = data => ({
  type: 'AddCart',
  payload: data,
});

export const RemoveCart = data => ({
  type: 'RemoveCart',
    payload: data,
});
