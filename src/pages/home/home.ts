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

  usuarios: any;

  constructor(
    public navCtrl: NavController,
    public authJsonDataProvider: AuthJsonDataProvider,
    public loadingCtrl: LoadingController
    ) {


  }

  ionViewDidLoad(){
    this.login()
  }

  login(){
    //if(this.email && this.password){
      this.authJsonDataProvider.getUsers().subscribe(res=>{
      this.usuarios = res;
      console.log(this.usuarios);
      for(var n = 0; n < this.usuarios.length; n++){
        console.log(this.usuarios[n])
        /*if(this.usuarios[n].email === this.email && this.usuarios[n].password === this.password){
          console.log('Se ha logueado: '+this.usuarios[n].name.first);
          break
        }*/
      }
      }),
      (error) =>{
        console.error(error);
      }
    //}else{
      //alert('Faltan credenciales')
    //}
    
  }



}
