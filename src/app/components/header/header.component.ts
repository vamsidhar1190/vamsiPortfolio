import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrl:'./header.component.scss',
  standalone: true,
  imports: [CommonModule],
  

})
export class HeaderComponent {
  scrolled = false;
  menuActive = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}