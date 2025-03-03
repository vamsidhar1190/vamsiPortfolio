import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl:'./hero.component.html',
  styleUrl:'./hero.component.scss',
  standalone: true,
  imports: [CommonModule],
  
})
export class HeroComponent {}