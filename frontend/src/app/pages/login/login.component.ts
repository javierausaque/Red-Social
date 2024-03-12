import { Component, importProvidersFrom } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Route, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthJtwTokenService } from '../../services/auth-jwt.service';
import { User } from '../../utils/interfaces';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    HttpClientModule,
       ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    HttpClientModule,
  ],
})
export class LoginComponent {


  constructor(
    public router: Router,
    private authService: AuthJtwTokenService<User>
  ) {
  }

  public hide = true;

  public formLogin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  public async login() {
    let email = this.formLogin.value.username;
    let password = this.formLogin.value.password
    if(!this.formLogin.valid){
      return;
    }
    this.router.navigate(["/"])
    await this.authService.login({
      "email": email!!,
      "password": password!!
    })

    console.log(this.authService.userAuth);
    
  }

  public register() {
    this.router.navigate(["/register"])

  }
}
