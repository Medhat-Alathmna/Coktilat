import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users = [
    {
      name: 'Sarah',
      age: 32,
      gender: 'Female',
      availability: 'Available now',
      availableNow: true,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s',
      tags: ['anxiety', 'work-stress', 'relationships'],
      languages: ['English', 'Arabic','Franch'],
      expanded: true,
      status:[
        {name:'Rating',icon:'pi pi-star',value:'4:9/5'},
        {name:'Sessions',icon:'pi pi-comment',value:'250+'},
        {name:'Helped',icon:'pi pi-heart',value:'180+'},
        {name:'Return Rate',icon:'pi pi-users',value:'85%'},
      ],
      problems:[{name:'anixety'},{name:'work-stress'},{name:'tired'}],
      availableTime:[
        {day:'Mon',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Tue',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Wed',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Thu',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Fri',fromTime:'9 AM',ToTime:'5 PM'},
      ],
      bio: 'Certified therapist with 5 years of experience helping people manage anxiety and stress.'
    },
    {
      name: 'Sandy',
      age: 32,
      gender: 'Female',
      availability: 'Weekends 8 AM - 5 PM',
      availableNow: false,
      photo: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      tags: ['anxiety', 'work-stress', 'relationships'],
      languages: ['English', 'Arabic','Franch'],
      expanded: false,
      status:[
        {name:'Rating',icon:'pi pi-star',value:'4:9/5'},
        {name:'Sessions',icon:'pi pi-comment',value:'250+'},
        {name:'Helped',icon:'pi pi-heart',value:'180+'},
        {name:'Return Rate',icon:'pi pi-users',value:'85%'},
      ],
      problems:[{name:'anixety'},{name:'work-stress'},{name:'tired'}],
      availableTime:[
        {day:'Mon',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Tue',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Wed',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Thu',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Fri',fromTime:'9 AM',ToTime:'5 PM'},
      ],
      bio: 'Certified therapist with 5 years of experience helping people manage anxiety and stress.'
    },
    {
      name: 'Adam',
      age: 32,
      gender: 'Male',
      availability: 'Thursday 8 AM - 5 PM',
      availableNow: false,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s',
      tags: ['anxiety', 'work-stress', 'relationships'],
      languages: ['English', 'Arabic','Franch'],
      expanded: false,
      status:[
        {name:'Rating',icon:'pi pi-star',value:'4:9/5'},
        {name:'Sessions',icon:'pi pi-comment',value:'250+'},
        {name:'Helped',icon:'pi pi-heart',value:'180+'},
        {name:'Return Rate',icon:'pi pi-users',value:'85%'},
      ],
      problems:[{name:'anixety'},{name:'work-stress'},{name:'tired'}],
      availableTime:[
        {day:'Mon',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Tue',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Wed',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Thu',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Fri',fromTime:'9 AM',ToTime:'5 PM'},
      ],
      bio: 'Certified therapist with 5 years of experience helping people manage anxiety and stress.'
    },
    {
      name: 'Jad',
      age: 32,
      gender: 'Male',
      availability: 'Available now',
      availableNow: true,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s',
      tags: ['anxiety', 'work-stress', 'relationships'],
      languages: ['English', 'Arabic','Franch'],
      expanded: false,
      status:[
        {name:'Rating',icon:'pi pi-star',value:'4:9/5'},
        {name:'Sessions',icon:'pi pi-comment',value:'250+'},
        {name:'Helped',icon:'pi pi-heart',value:'180+'},
        {name:'Return Rate',icon:'pi pi-users',value:'85%'},
      ],
      problems:[{name:'anixety'},{name:'work-stress'},{name:'tired'}],
      availableTime:[
        {day:'Mon',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Tue',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Wed',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Thu',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Fri',fromTime:'9 AM',ToTime:'5 PM'},
      ],
      bio: 'Certified therapist with 5 years of experience helping people manage anxiety and stress.'
    },
    {
      name: 'Sarah',
      age: 32,
      gender: 'Female',
      availability: 'Monday 8 AM - 5 PM',
      availableNow: false,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s',
      tags: ['anxiety', 'work-stress', 'relationships'],
      languages: ['English', 'Arabic','Franch'],
      expanded: false,
      status:[
        {name:'Rating',icon:'pi pi-star',value:'4:9/5'},
        {name:'Sessions',icon:'pi pi-comment',value:'250+'},
        {name:'Helped',icon:'pi pi-heart',value:'180+'},
        {name:'Return Rate',icon:'pi pi-users',value:'85%'},
      ],
      problems:[{name:'anixety'},{name:'work-stress'},{name:'tired'}],
      availableTime:[
        {day:'Mon',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Tue',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Wed',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Thu',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Fri',fromTime:'9 AM',ToTime:'5 PM'},
      ],
      bio: 'Certified therapist with 5 years of experience helping people manage anxiety and stress.'
    },
    {
      name: 'Sarah',
      age: 32,
      gender: 'Female',
      availability: 'Available now',
      availableNow: true,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s',
      tags: ['anxiety', 'work-stress', 'relationships'],
      languages: ['English', 'Arabic','Franch'],
      expanded: false,
      status:[
        {name:'Rating',icon:'pi pi-star',value:'4:9/5'},
        {name:'Sessions',icon:'pi pi-comment',value:'250+'},
        {name:'Helped',icon:'pi pi-heart',value:'180+'},
        {name:'Return Rate',icon:'pi pi-users',value:'85%'},
      ],
      problems:[{name:'anixety'},{name:'work-stress'},{name:'tired'}],
      availableTime:[
        {day:'Mon',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Tue',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Wed',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Thu',fromTime:'9 AM',ToTime:'5 PM'},
        {day:'Fri',fromTime:'9 AM',ToTime:'5 PM'},
      ],
      bio: 'Certified therapist with 5 years of experience helping people manage anxiety and stress.'
    },
    
  ];
    constructor() {}

    ngOnInit(): void {
       
    }
    toggleCard(selected: any) {
      if (selected.expanded ) {
        return
      }
      this.users.forEach(t => {
        if (t !== selected) t.expanded = false;
      });
      selected.expanded = !selected.expanded;
    }
    

}
