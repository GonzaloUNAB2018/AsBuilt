import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import { Item } from 'ionic-angular';

/*
  Generated class for the JsonDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonDataProvider {

  constructor(public http: Http) {
    console.log('Hello JsonDataProvider Provider');
  }

  getRemoteData(){
    return this.http.get('./assets/bd.json')
  }

}
