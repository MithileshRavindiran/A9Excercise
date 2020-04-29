import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseTypes = [
    {id:1,  type:'Infrastructure'},
    {id:2, type:'Backend'},
    {id:3, type:'Frontend'},
    {id:4,  type:'Devops'},
    {id:5, type:'Cloud Technology'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onChange(courseName) {
    console.log(courseName);
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value.courseName);
    console.log(form.value.courseType.id);
    console.log(form.value.courseType.type);
    console.log(form.value.moneyBack)
  }

}
