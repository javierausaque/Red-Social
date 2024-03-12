import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { PostComponent } from '../post/post.component';
import { SearchComponent } from '../search/search.component';
import { AuthJtwTokenService } from '../../services/auth-jwt.service'
import { User } from '../../utils/interfaces';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, CommonModule, MatIconModule, MatTooltipModule, MatMenuModule, PostComponent, SearchComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavComponent implements OnInit {

  public user : User;

  constructor(private authService: AuthJtwTokenService<User>){
 
    this.user = {} as User
  }
  ngOnInit() {
     this.user =this.authService.userAuth
     console.log("USER", this.user);
  }

  public showFiller = true;


  public logout(){
    this.authService.logout()
  }
}
