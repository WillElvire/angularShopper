import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoginAction } from 'src/app/store/app.reducer';
import { ErrorAction } from 'src/app/store/error.reducer';
import { AuthActions, endPoint, RequestType } from '../../enum/auth';
import { Error } from '../../enum/error';
import { AppState } from '../../enum/store';
import { Http } from '../api';
import { loginPayload } from './../../interface/user';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authentification {
  constructor(private store: Store<any>, private api: Http) {}

  async login(payload: loginPayload) {
    await this.api.Call( endPoint.LOGIN,payload, RequestType.POST).subscribe(
      (res: any) => {
        this.store.dispatch(new LoginAction(AuthActions.LOGIN, res));
      },
      (err: any) => {
        this.store.dispatch(new ErrorAction(Error.LOGIN_FAILED, err));
      }
    );
  }

  listerner(type: string = AppState.Error): Observable<any> {
    return this.store.pipe(select(type));
  }

  handleError() {
    return this.store.dispatch(
      new ErrorAction(Error.LOGIN_FAILED, { error: null })
    );
  }
}
