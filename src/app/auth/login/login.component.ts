import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppState } from 'src/app/core/enum/store';
import { Authentification } from 'src/app/core/services/auth';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit , OnDestroy {
  name: string = '';
  error: any;
  isLoaded: boolean = false;
  hide: boolean = true;
  isConnected: any;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private _snackBar: MatSnackBar,
    private authentification: Authentification
  ) {}

  ngOnInit(): void {

    this.authentification.listerner(AppState.Error).subscribe((data) => {
      this.error = data.error;
      if(this.error?.message){
        this.openDialog(this.error?.message, 'Fermer');
      }
    });
    this.authentification.listerner(AppState.Auth).subscribe((data) => {
      if (data.payload.user?.email != null) {
        return (this.isConnected = data.payload.user);
      }
    });

  }

  ngOnDestroy(): void {
    this.authentification.handleError();
  }


  Login() {
    const payload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    if (this.loginForm.valid) {
      this.isLoaded = true;
      this.authentification.login(payload).then(
        (action) => {
          this.setSpinner(false);
        },
        (error) => {
          this.setSpinner(false);
        }
      );
    } else {
      this.openDialog('Veuillez remplir tous les champs', 'Fermer');
    }
  }

  setSpinner(value: boolean) {
    setTimeout(() => {
      this.isLoaded = value;
    }, 1500);
  }

  openDialog(message: string, action: string): void {
    this._snackBar.open(message, action,{
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }
}

