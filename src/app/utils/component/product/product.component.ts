import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AssetPath } from 'src/app/core/enum/assets';
import { ShopAction } from 'src/app/core/enum/shop';
import { Storage } from 'src/app/core/services/storage';
import { addProductToCart } from 'src/app/store/cart.reducer';
import { Http } from './../../../core/services/api/index';
import { CredentialsService } from './../../../core/services/auth/credential';
import { product } from 'src/app/core/interface/shop';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any = [];
  myCart: product[] = [];
  direction: MatSnackBarConfig = {
    horizontalPosition: 'left',
    verticalPosition: 'bottom',
  };
  constructor(
    private api: Http,
    private store: Store<any>,
    private _snackBar: MatSnackBar,
    private myCard$: CredentialsService
  ) {}

  ngOnInit(): void {
    this.api.Call(AssetPath.JSON_PATH).subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
    });
    this.getAllCartProducts();
  }

  addItemToCart(item: product) {
    this.openDialog('Produit ajouté au panier', 'Close');
    this.store.dispatch(new addProductToCart(ShopAction.AddProduct, item));
    //this.myCard$.setUserCartProduct(this.myCart.name(item));
  }

  openDialog(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: this.direction.horizontalPosition,
      verticalPosition: this.direction.verticalPosition,
    });
  }

  getAllCartProducts() {
    this.myCart = this.myCard$.getCartProduct();
    console.log(this.myCart);
  }
}
