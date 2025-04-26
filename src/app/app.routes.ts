import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:'home' , component:HomeComponent},
    {path:'about' , component:AboutComponent},
    {path:'' , redirectTo:'home',pathMatch:'full'},
    {path:'**' , redirectTo:'home',pathMatch:'full'},
];
