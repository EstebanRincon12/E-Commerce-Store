import { Component, OnInit } from '@angular/core';
import { CreateUserService } from 'src/app/services/create-user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private createUserService :CreateUserService) { }

  user = {
    login: '',
    rol_name: '',
    id_person: '',
    password: ''
  };

  ngOnInit(): void {
  }

  createUser(): void {
    this.createUserService.createUser(this.user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        // Manejar el error aquí
        console.error(error);
      }
    );
  }
}
