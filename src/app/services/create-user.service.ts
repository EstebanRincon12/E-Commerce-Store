import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentResponse } from '../models/content-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private apiUrl = " https://localhost:5000";
 

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create_user`, user);
  }
}
