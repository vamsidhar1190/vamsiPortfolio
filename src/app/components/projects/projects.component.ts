import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

@Component({
  selector: 'app-projects',
  templateUrl:'./projects.component.html',
  styleUrl:'./projects.component.scss',
  standalone: true,
  imports: [CommonModule],

})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order processing.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'TypeScript', 'NgRx', 'Chart.js', 'Firebase'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com'
    },
    {
      title: 'Task Management App',
      description: 'A feature-rich task management application with drag-and-drop functionality, team collaboration, and progress tracking.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Material UI', 'Node.js'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com'
    },
    {
      title: 'Weather Forecast App',
      description: 'A weather application that provides real-time forecasts, historical data, and interactive maps for locations worldwide.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'TypeScript', 'OpenWeatherMap API', 'Leaflet'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A unified dashboard for managing multiple social media accounts with analytics, content scheduling, and engagement tracking.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'TypeScript', 'Express', 'MongoDB', 'Social APIs'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com'
    },
    {
      title: 'Real Estate Listing Platform',
      description: 'A comprehensive platform for real estate listings with advanced search, filtering, and virtual tours functionality.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Google Maps API'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com'
    },
    {
      title: 'Fitness Tracking App',
      description: 'A fitness application for tracking workouts, nutrition, and progress with personalized recommendations and analytics.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'Node.js', 'MongoDB'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com'
    }
  ];

  filters: string[] = ['All', 'Angular', 'TypeScript', ];
  activeFilter: string = 'All';
  filteredProjects: Project[] = this.projects;

  setFilter(filter: string) {
    this.activeFilter = filter;
    
    if (filter === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.technologies.includes(filter)
      );
    }
  }
}