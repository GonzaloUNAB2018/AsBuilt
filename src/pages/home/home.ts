import { Component } from '@angular/core';
import { NavController, Item, LoadingController } from 'ionic-angular';
//import { JsonDataProvider } from '../../providers/json-data/json-data';
import 'rxjs/add/operator/map'
import { AuthJsonDataProvider } from '../../providers/auth-json-data/auth-json-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
    public loadingCtrl: LoadingController,
    public http: HttpClient
    ) {

  }

  ionViewDidLoad(){
    //this.login()
  }

  login(){
    if(this.email && this.password){
      this.authJsonDataProvider.getUsers().subscribe(res=>{
      this.usuarios = res;
      //console.log(this.usuarios);
      console.log(this.email, this.password);
      for(var n = 0; n < this.usuarios.length; n++){
        if(this.email === this.usuarios[n].email && this.password === this.usuarios[n].login.password){
          console.log('Se ha logueado: '+this.usuarios[n].name.first);
          //console.log(this.usuarios[n]);
          this.userDataBase = this.usuarios[n];
          console.log(this.userDataBase);
          this.authState = true;
          break
        }else{
          if(n = this.usuarios.length){
            alert('Usuario no registrado')
          }
        }
      }
      }),
      (error) =>{
        console.error(error);
      }
    }else{
      alert('Faltan credenciales')
    }
  }

  postDatos(){
    let datos = { nombre:'Edu',email:'edu.revilla.vaquero@gmail.com'}
    
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
   var url = './assets/auth.json';
   return new Promise(resolve => {
    this.http.post(url,JSON.stringify(datos),options)
       .subscribe(data => {
         resolve(data);
        });
   });
  }

}
