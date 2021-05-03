import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Sunglass",
      description:
        "",
      price: 15.0,
      image:"https://i.pinimg.com/originals/40/ec/6d/40ec6db9ac1552bad9bbe0ae0b845ddb.jpg"
    },
    {
      id: 2,
      title: "Sunglass",
      description:
        "",
      price: 20.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/511ptk4SNrL._UX569_.jpg",
    },
    {
      id: 3,
      title: "sneakers",
      description:"",
            price: 300,
      image:
      "https://rukminim1.flixcart.com/image/714/857/jngcn0w0/shoe/c/6/5/blue-denim-05-flaunters-light-blue-original-imafa4qzg7gwbnff.jpeg?q=50"
},
    {
      id: 4,
      title: "Ray-Ban Blue Aviator Sunglasses",
      description:"",
            price: 200,
      image:
        "https://www.sbgtrends.com/wp-content/uploads/2018/05/Ray-Ban-Blue-Aviator-Sunglasses-SDL868058990-2-b8da6.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
