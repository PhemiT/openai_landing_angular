import { Component } from '@angular/core';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleMenu: boolean = false;
  menuIcon = faBars;
  closeIcon = faTimes;
  
  toggleMenuState(): void {
    this.toggleMenu = !this.toggleMenu;
  }
}
