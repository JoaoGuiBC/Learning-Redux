import { Reducer } from "redux";
import Produce from 'immer';

import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return Produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        console.log(action.payload);

        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item => 
          item.product.id === product.id,  
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      default: {
        return draft;
      }
    }
  })
}

export default cart;