import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginService } from 'src/app/services/login.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private localStorageService: LocalStorageService,public router: Router, private _data : DataService) { }

  ngOnInit(): void {
  }
  password = "";
  contrasena = "";
  login = "";
  token = "";
  state = false;
  messagge = "";
  r!: ContentResponseToken;

  getToken(): void {
    console.log("click: " + this.login + ", " + this.password)

    this.loginService.login(this.login, this.password).subscribe(
      response => {
        localStorage.clear();
        this.router.navigateByUrl('/home');
        this.r = this.getDecodedAccessToken(this.token);
        console.log(this.r);
        this.localStorageService.set("role", this.r.role);
        this.localStorageService.set("login", this.r.login);
        this.localStorageService.set("id_person", this.r.id_person);
        this.localStorageService.set("exp", this.r.exp+"");
        this._data.logueado = true;
        console.log(response);
      },
      error => {
        this._data.logueado = false;
        console.error(error);
      }
    );
  }
 


  

  getDecodedAccessToken(token: string): ContentResponseToken {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return new ContentResponseToken();
    }
  }
}

export class ContentResponseToken{
  login = "";
  role = "";
  id_person = "";
  exp! : number;
  
}

