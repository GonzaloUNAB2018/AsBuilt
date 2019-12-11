import { Component } from '@angular/core';
import { NavController, Item, LoadingController } from 'ionic-angular';
//import { JsonDataProvider } from '../../providers/json-data/json-data';
import 'rxjs/add/operator/map'
import { AuthJsonDataProvider } from '../../providers/auth-json-data/auth-json-data';
import { Observable } from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  jsonData : any;
  items = [];

  email : any;

  password : any;

  userDataBase : any;

  authState : boolean = false;

  constructor(
    public navCtrl: NavController,
    public authJsonDataProvider: AuthJsonDataProvider,
    public loadingCtrl: LoadingController
    ) {


  }

  ionViewDidLoad(){
    console.log(this.authState)
  }

  login(){
    let load = this.loadingCtrl.create({
      content : 'iniciando Sesión'
    });
    load.present();
    this.authJsonDataProvider.signInWithEmailAndPassword(this.email, this.password);
    setTimeout(() => {
      this.userDataBase = this.authJsonDataProvider.userAuth;
      console.log(this.userDataBase);
      this.authState = true;
      load.dismiss();
    }, 2000);
  }



}
