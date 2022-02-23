import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { product } from 'src/app/core/interface/shop';
import { ShopAction } from 'src/app/core/enum/shop';
import { removeProductFromCart } from 'src/app/store/cart.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppState } from 'src/app/core/enum/store';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  products = [];

  constructor(private store: Store<any>) {}
  ngOnInit(): void {
    this.store.select(AppState.Cart).subscribe((data: any) => {
      this.products = data.products;
    });
  }
}

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shopping.html',
  styleUrls: ['./shopping.scss'],
})
export class ShoppingComponent implements OnInit {
  @Input() products: any;
  constructor(private store: Store<any>, private _snackBar: MatSnackBar) {}
  ngOnInit(): void {}

  removeAllProducts() {
    this.store.dispatch(
      new removeProductFromCart(ShopAction.RemoveAllProducts, [])
    );
    this.openDialog('Votre panier a été vidé', 'Close');
  }

  openDialog(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
}
