import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from './core/enum/auth';
import { localAuth } from './core/services/auth/localAuth';
import { InitilisationAction } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private localAuth: localAuth, private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(
      new InitilisationAction(AuthActions.INITIALISATION, {
        user: this.localAuth.userConnected,
        token: this.localAuth.userToken,
      })
    );
  }
}
