import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {

  constructor(private _location:Location) { }

  ngOnInit(): void {
  }

  getLastestRoute = ()=>{
    return this._location.back();
  }

}
