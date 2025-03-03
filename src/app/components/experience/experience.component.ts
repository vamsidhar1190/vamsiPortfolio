import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl:'./experience.component.html',
  styleUrl:'./experience.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class ExperienceComponent {
  activeTab: string = 'experience';

  workExperience: Experience[] = [
    {
      title: 'Senior Angular Developer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2022 - Present',
      location: 'New York, USA',
      description: [
        'Lead a team of 5 developers in building enterprise-level Angular applications',
        'Implemented state management solutions using NgRx, resulting in a 30% improvement in application performance',
        'Developed reusable component libraries that reduced development time by 40%',
        'Established coding standards and best practices for the frontend team'
      ],
      technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Material UI', 'Jest']
    },
    {
      title: 'Angular Developer',
      company: 'Digital Solutions Ltd.',
      period: 'Mar 2019 - Dec 2021',
      location: 'Boston, USA',
      description: [
        'Developed and maintained multiple Angular applications for clients in finance and healthcare',
        'Created responsive UI components using Angular Material and custom CSS',
        'Integrated RESTful APIs and implemented authentication using JWT',
        'Collaborated with UX designers to implement pixel-perfect designs'
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Angular Material', 'Firebase', 'Jasmine']
    },
    {
      title: 'Frontend Developer',
      company: 'WebCraft Studios',
      period: 'Jun 2017 - Feb 2019',
      location: 'San Francisco, USA',
      description: [
        'Built interactive web applications using Angular and other frontend technologies',
        'Optimized application performance, achieving a 25% reduction in load time',
        'Implemented responsive designs for cross-platform compatibility',
        'Participated in code reviews and mentored junior developers'
      ],
      technologies: ['Angular', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git']
    }
  ];

  education: Education[] = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      period: '2015 - 2017',
      description: 'Specialized in Web Technologies and Software Engineering. Completed thesis on "Optimizing Performance in Single Page Applications".'
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'MIT',
      period: '2011 - 2015',
      description: 'Graduated with honors. Participated in various hackathons and coding competitions. Member of the Web Development Club.'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Coding Academy',
      period: '2016 (3 months)',
      description: 'Intensive program covering modern web development technologies including Angular, Node.js, and MongoDB.'
    }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}