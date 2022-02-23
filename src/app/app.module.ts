import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule }from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { authReducer } from './store/app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { errorReducer } from './store/error.reducer';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LandingComponent, ShoppingComponent } from './pages/landing/landing.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BackComponent } from './utils/component/back/back.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProductComponent } from './utils/component/product/product.component';
import {MatBadgeModule} from '@angular/material/badge';
import { cartReducer } from './store/cart.reducer';
@NgModule({
  declarations: [ProductComponent,AppComponent, LoginComponent, LandingComponent, BackComponent,ShoppingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule,
    StoreModule.forRoot({'authState': authReducer, 'errorState': errorReducer,'cartState': cartReducer}),
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[BackComponent,ShoppingComponent,ProductComponent]
})
export class AppModule {}
