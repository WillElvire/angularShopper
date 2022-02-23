import { Injectable } from '@angular/core';
import { credentials } from '../../interface/user';
import { Storage } from '../storage';
import { User } from './../../interface/user';
import { product } from 'src/app/core/interface/shop';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private _credentials: credentials;
  private myCart: product[] = [];

  storageKeys = {
    token: 'token',
    user: 'user',
    cart: 'cart',
  };

  constructor(private storage: Storage) {
    const [token, user] = this.storage.gets([
      this.storageKeys.token,
      this.storageKeys.user,
    ]);
    this._credentials = {
      token: token?.value,
      User: JSON.parse(user?.value),
    };
    const myCart = this.storage.gets([this.storageKeys.cart]);
    this.myCart = JSON.parse(myCart[0].value);
  }

  public isAuthenticated(): boolean {
    return !!this._credentials;
  }

  get credentials(): credentials | null {
    return this._credentials;
  }

  public getAccessToken(): any {
    return this._credentials?.token;
  }

  public getCartProduct(): product[] {
    return this.myCart;
  }

  public getUser(): User {
    return this._credentials?.User;
  }

  public setCredentials(credentials: credentials) {
    this._credentials = credentials;
    this.storage.sets([
      {
        key: this.storageKeys.token,
        value: credentials.token,
      },
      {
        key: this.storageKeys.user,
        value: JSON.stringify(credentials.User),
      },
    ]);
  }

  public setUserCartProduct(product: product | any) {
    this.myCart = [];
    this.storage.sets([
      { key: this.storageKeys.cart, value: JSON.stringify(product) },
    ]);
  }
}
