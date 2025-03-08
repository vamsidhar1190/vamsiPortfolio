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
      title: 'Associate Software Engineer',
      company: 'Ahex Technologies, Hyderabad.',
      period: 'Nov 2022 - Sep 2024',
      location: 'Hyderabad, Telangana',
      description: [
        'As an Associate Software Engineer, I have gained some experience and am now applying my skills to contribute to real-world software development projects.',
        'I work more independently but still seek guidance from senior engineers for complex tasks or technical challenges',
        ' I continue to develop my technical expertise and soft skills, preparing for further advancement to more senior engineering roles.',
        'Collaborated with UX designers to implement pixel-perfect designs'
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'PrimeNg','Bootstrap']
    },
    {
      title: 'Associate Software Trainee',
      company: 'InkProg Technologies.',
      period: 'Aug 2022 – Nov 2022',
      location: 'Hyderabad, Telangana',
      description: [
        'I am a Software Trainee, starting my career and gaining practical experience in software development.',
        'I work under the guidance of senior developers, learning how to code, debug, and test applications.',
        'I get exposure to languages like Angular, HTML,Css,Scss,TypeScript and Bootstrap, along with development frameworks.',
        'This role helps me improve both my technical skills (coding, debugging) and soft skills (communication, teamwork)',
        'This position serves as a foundation, offering potential for advancement into senior roles as I gain experience.'
      ],
      technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Material UI', 'Boostrap']
    },
   
   
  ];

  education: Education[] = [
    {
      "degree": "Bachelor of Commerce (Computer Applications)",
      "institution": "Sri Hari Degree College",
      "period": "2018 - 2021",
      "description": "Specialized in Computer Applications, focusing on software development, programming languages, and application design. Gained a strong foundation in both commerce and technology."
    },
    {
      "degree": "Intermediate (MPC)",
      "institution": "Sri Gayatri Junior College",
      "period": "2015 - 2018",
      "description": "Studied Mathematics, Physics, and Chemistry (MPC), developing strong analytical and problem-solving skills, laying the groundwork for further studies in technology."
    },
    {
      "degree": "10th Grade",
      "institution": "Sri Vasista Vidya Mandir High School",
      "period": "2014 - 2015",
      "description": "Completed secondary education with a focus on general subjects, providing a solid academic base for higher education."
    }
    
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}