import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentResponseToken } from '../models/content-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpoint = "login"

  constructor(private http: HttpClient) { }

  public login(login: string, password: string){
    return this.http.post<any>(`https://localhost:5000/${this.endpoint}`, 
    {login, password});
  }
}
