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

  constructor(public http: Http) {
    console.log('Hello AuthJsonDataProvider Provider');
    
  }

  public signInWithEmailAndPassword(email, password){
    let users : any = [];
    this.http.get('./assets/auth.json').map(res => res.json() as Array<Item>).subscribe(us=>{
      users = us;
      for(var n = 0; n < users.users.length; n++){
        if(email === users.users[n].email && password === users.users[n].password){
          console.log('Ok');
          this.userAuth = users.users[n];
          //console.log(this.userAuth)
          this.auth = true;
          break
        }
      }
    });
  }

  public registreUser(user){
    return new Promise(resolve => {
      this.http.post('./assets/auth.json', JSON.stringify(user)).subscribe(data=>{
        resolve(data)
      })
    })
  }

}
