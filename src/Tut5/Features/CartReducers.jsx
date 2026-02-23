export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  const total = cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return Math.round(total * 100) / 100;
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      const existingProduct = state.find(
        (item) => item.id === action.product.id
      );

      if (existingProduct) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }

    case "REMOVECART":
      return state.filter((p) => p.id !== action.id);

    case "INCREASE":
      const IndexI = state.findIndex((p) => p.id === action.id);
      state[IndexI].quantity = state[IndexI].quantity + 1;
      return [...state];

    case "DECREASE":
      const IndexD = state.findIndex((p) => p.id === action.id);
      state[IndexD].quantity = state[IndexD].quantity - 1;
      return [...state];

    default:
      return state;
  }
};

export default CartReducer;
