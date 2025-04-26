import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-navbar',
  imports: [TabsModule, CommonModule, RouterModule],
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  tabs = [
    { route: 'home', label: 'HOME', icon: 'pi pi-home' },
    { route: 'about', label: 'ABOUT', icon: 'pi pi-about' }
];
}
