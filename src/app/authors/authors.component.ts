import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title : string = "Authors";
  authors :string[];
  isFavourite:boolean = false;
  name :string;
  isLeft = true;
  isLiked = false;
  counts = 10;
  constructor(authorService: AuthorsService) { 
    this.authors=authorService.getAuthors();
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.isFavourite)
    this.isFavourite=!this.isFavourite;
  }

  onClickArrows() {
    console.log(this.isLeft)
    this.isLeft=!this.isLeft;
  }

  onKeyUpEnter() {
    console.log("inside Enter");
  }

}
