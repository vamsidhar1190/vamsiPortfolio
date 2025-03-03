import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  templateUrl:'./skills.component.html',
  styleUrl:'./skills.component.scss',
  standalone: true,
  imports: [CommonModule],
 
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'Angular', level: 95, icon: 'fab fa-angular' },
    { name: 'TypeScript', level: 90, icon: 'fab fa-js' },
    { name: 'JavaScript', level: 90, icon: 'fab fa-js' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt' },
    { name: 'SASS', level: 80, icon: 'fab fa-sass' }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
    { name: 'Express', level: 70, icon: 'fas fa-server' },
    { name: 'MongoDB', level: 65, icon: 'fas fa-database' },
    { name: 'Firebase', level: 80, icon: 'fas fa-fire' }
  ];

  toolsSkills: Skill[] = [
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
    { name: 'GitHub', level: 85, icon: 'fab fa-github' },
    { name: 'VS Code', level: 90, icon: 'fas fa-code' },
    { name: 'Jira', level: 80, icon: 'fab fa-jira' }
  ];
}