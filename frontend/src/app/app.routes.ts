import { Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component'
import { RegisterComponent } from '../app/pages/register/register.component'
import { HomeComponent } from '../app/pages/home/home.component'
import { tokenGuard } from './security/token.guard';

export const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        canActivate: [tokenGuard],
        component: HomeComponent
    }
];
