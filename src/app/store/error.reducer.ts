import { Action } from "@ngrx/store";
import { Error } from "../core/enum/error";
import { action } from "../core/interface/state";

export interface ErrorState{
  error: any;
}
const initialErrorState: ErrorState = {
  error: null,
}
export class ErrorAction implements Action{
  constructor(public type: any, public payload?: any) {}
}

export function errorReducer(state = initialErrorState,action:action | any){

  switch(action.type){
    case Error.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload.error
      }
    break;
    default:
      return {
        ...state
      }
    break;
  }
}
