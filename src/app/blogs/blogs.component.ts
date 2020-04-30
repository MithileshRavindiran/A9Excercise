import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  archives:  any[]; 
  constructor() { }

  ngOnInit(): void {
    console.log('My Blogs Component Init');
    this.archives = [
      {year:'2019', month:'1'},
      {year:'2019', month:'2'},
      {year:'2019', month:'3'},
    ];
  }

}
