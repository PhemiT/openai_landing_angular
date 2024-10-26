import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleMenu: boolean = false;
  
  toggleMenuState(): void {
    this.toggleMenu = !this.toggleMenu;
  }
}
