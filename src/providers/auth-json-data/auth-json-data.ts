import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import { Item } from 'ionic-angular';

/*
  Generated class for the AuthJsonDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthJsonDataProvider {

  public userAuth = {
    name : null,
    surname : null,
    email : null,
    password : null,
    id : null
  }

  auth: boolean = false;

  path : string = './assets/users.json';

  users : any;

  constructor(public http: Http, public http_: HttpClient) {
    console.log('Hello AuthJsonDataProvider Provider');
    this.getUsers();
  }

  public getUsers(){
    return this.http_.get(this.path)
  }

}
