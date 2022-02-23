import { action } from '../core/interface/state';
import { Action } from '@ngrx/store';
import { ShopAction } from '../core/enum/shop';

const initialCartState: any = {};
export class addProductToCart implements Action {
  constructor(public type: any, public payload?: any) {}
}

export class removeProductFromCart implements Action {
  constructor(public type: any, public payload?: any) {}
}

export function cartReducer(state = initialCartState, action: action | any) {
  switch (action.type) {
    case ShopAction.AddProduct:
      return {
        ...state,
        products: [action.payload],
      };
      break;

    case ShopAction.RemoveProduct:
      break;
    default:
      return {
        ...state,
        products: [],
      };
      break;
  }
}
