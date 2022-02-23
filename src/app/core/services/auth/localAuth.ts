
import { Injectable } from '@angular/core';
import { User } from './../../interface/user';
import { CredentialsService } from './credential';
@Injectable({
  providedIn: 'root',
})
export class localAuth {

  constructor(protected credentials: CredentialsService ) {
    /*this.credentials.setCredentials({
      token: '',
      User: {
        id: 0,
        name: 'kouassi koua jean felix',
        email: 'kouame@gmail.com',
        password: 'messi007',
      }
    }) */
  }
  get userConnected(): User  {
    return this.credentials?.getUser();
  }

  get userToken():string{
    return this.credentials?.getAccessToken();
  }
}
