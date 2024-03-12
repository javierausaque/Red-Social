import { Component, OnInit } from '@angular/core';
import 
{ NavComponent } from '../../../app/components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthJtwTokenService } from '../../services/auth-jwt.service';
import { User } from '../../utils/interfaces';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {


}
