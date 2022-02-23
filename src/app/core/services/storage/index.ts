import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Storage {
  constructor() {}

  get(field: string) {
    return localStorage.getItem(field);
  }

  set(field: string, value: any) {
    localStorage.setItem(field, JSON.stringify(value));
  }

  gets(items: any[]): any {
    const dataContainer: any = [];
    items.forEach((name) => {
      dataContainer.push({
        key: name,
        value: localStorage.getItem(name),
      });
    });
    return dataContainer;
  }

  sets(items: any[]) {
    items.forEach((el: any) => {
      this.store(el.key, el.value);
    });
  }
  store(key: string, value: string) {
    return localStorage.setItem(key, value);
  }
}
