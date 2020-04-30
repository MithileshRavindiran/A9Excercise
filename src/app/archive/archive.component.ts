import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  year: string;
  month: string;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      response => {
        console.log('year'+ response.get('year'));
        this.year = response.get('year');
        console.log('month'+ response.get('month'));
        this.month = response.get('month');
      }
    )
  }

  navigate() {
    this.router.navigate(['/blogs']);
  }

}
