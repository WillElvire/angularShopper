import { Action } from '@ngrx/store';
import { AuthActions } from '../core/enum/auth';
import { credentials, User } from '../core/interface/user';
import { action } from './../core/interface/state';

const initialState: credentials = {
  token: '',
  User:{}
};

export class LoginAction implements Action {
  constructor(public type: any, public payload?: any) {}
}
export class LogoutAction implements Action {
  constructor(public type: any, public payload?: any) {}
}

export class InitilisationAction implements Action{
  constructor(public type: any, public payload?: any) {}
}
export function authReducer(state = initialState, action: action | any) {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...action
      };
    break;
    case AuthActions.LOGOUT:
      return {};
      break;
    case AuthActions.INITIALISATION:
      return {
        ...state,
        ...action
      };
    break;

    default:
      return { ...state };
    break;
  }
}
