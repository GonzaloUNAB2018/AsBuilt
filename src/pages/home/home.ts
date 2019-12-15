import { Component } from '@angular/core';
import { NavController, Item, LoadingController } from 'ionic-angular';
//import { JsonDataProvider } from '../../providers/json-data/json-data';
import 'rxjs/add/operator/map'
import { AuthJsonDataProvider } from '../../providers/auth-json-data/auth-json-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


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

  data: any;

  constructor(
    public navCtrl: NavController,
    public authJsonDataProvider: AuthJsonDataProvider,
    public loadingCtrl: LoadingController,
    public http: HttpClient
    ) {

  }

  ionViewDidLoad(){
    //this.consultaServidor();
  }

  consultaServidor(){
    /*let loadingServer = this.loadingCtrl.create({
      content: 'Iniciando conexión con el servidor'
    });
    loadingServer.present();*/
    this.http.post('http://localhost:8080/contact', {
      message : 'Conectado'
    })
    .pipe(map(res=>res))
    .subscribe(data=>{
      this.data = data
      console.log(this.data.message);
    });
  }

  getAllUsers(){
    this.http.get('http://localhost:8080/getUsers').subscribe(users=>{
      console.log(users)
    })
  }

  login(){
    if(this.email && this.password){
      this.authJsonDataProvider.getUsers().subscribe(res=>{
      this.usuarios = res;
      console.log(this.usuarios);
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

}
