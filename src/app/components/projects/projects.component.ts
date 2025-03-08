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
      title: 'ATC Project',
      description: 'Designed and implemented a flight search and seat booking system with dynamic filters and real-time seat selection. Conducted manual end-to-end testing to validate user flows and application performance across different devices and browsers.',
      image: 'assets/indigo-3.jpg',
      technologies: ['Angular', 'TypeScript', 'NgRx','HTML','Scss','primeng','RESTful APIs' ],
      demoLink: '',
      codeLink: ''
    },
    {
      title: 'Thapala Project',
      description: ' Integrated a rich-text editor (Quill) with customized toolbars for real-time formatting. Developed Angular services for seamless UI-backend communication. Performed manual testing to ensure feature functionality and UI consistency.',
      image: 'assets/Mailroom1.jpg',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'PrimeNg', 'HTML','Scss','Bootstrap','RESTful APIs'],
      demoLink: '',
      codeLink: ''
    },
    {
      title: 'Admin Dashboards',
      description: 'Developed multiple admin dashboards for hospital management, sales, power, banking, health tracking, and grievance management, integrating features like patient tracking, performance reports, monitoring, and workflow engines from March 2023 to May 2024.',
      image: 'assets/admin.webp',
      technologies: ['Angular', 'TypeScript','PrimeNg', 'HTML','Scss','Bootstrap','Chart.Js'],
      demoLink: '',
      codeLink: ''
    },
    {
      title: 'Task Management Application',
      description: 'Developed a task management application using Angular, allowing users to create, update, and delete tasks. Implemented user authentication, task categorization, and a dynamic dashboard for tracking progress.',
      image: '/assets/task.webp',
      technologies: ['Angular', 'TypeScript', 'PrimeNg', 'HTML','Scss','Bootstrap'],
      demoLink: '',
      codeLink: ''
    },
    {
      title: 'E-commerce',
      description: 'Created an e-commerce product catalog application showcasing various products with filtering and sorting capabilities. Users can view product details and add items to a shopping cart, enhancing the shopping experience.',
      image: '/assets/ecommerce.jpg',
      technologies: ['Angular', 'TypeScript', 'PrimeNg', 'HTML','Scss','Bootstrap','RESTful APIs'],
      demoLink: '',
      codeLink: ''
    },
    
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