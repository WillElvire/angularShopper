import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestType, server } from '../../enum/auth';
@Injectable({
  providedIn: 'root'
})
export class Http {


  constructor(private http: HttpClient) {}

  HttpHeader(){
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }
  }

  Header(){
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
    });
  }

  Call(url: string, body: any = {} ,method: string = RequestType.GET) {
    switch (method) {
      case RequestType.GET:
        return this.http.get(url,{headers: this.Header()});
        break;
      case RequestType.POST:
        return this.http.post(server.URL+url, JSON.stringify(body),{headers: this.Header()});
        break;
      case RequestType.PUT:
        return this.http.put(server.URL+url, body,{headers: this.Header()});
        break;
      case RequestType.DELETE:
        return this.http.delete(server.URL+url,{headers: this.Header()});
        break;
      default:
        return this.http.get(server.URL+url);
      break;
    }
  }
}
