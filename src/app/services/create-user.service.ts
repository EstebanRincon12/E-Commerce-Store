import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private endPointCreate = "create_user";

  constructor(private http: HttpClient) { }


  login = data['login']
    rol_name =  data['rol_name']
    id_person = data['id_person']
    password = data['password']

  public createUser(id_persona: number, login: string, rol_name: string, description: string, password: string) {
    return this.http.post<ContentResponseMessage>(`${environment.apiUrl}/${this.url}/${this.endPointCreate}`,
      { id_persona, login, rol_name, description, password });
  }
}
