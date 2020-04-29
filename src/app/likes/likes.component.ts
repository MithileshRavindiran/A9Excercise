import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input('likesCount') counts:  number;

  @Input('isLiked') isLiked: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }


  onLikeClick() {
    console.log("Hello");
    this.counts +=  this.isLiked  ? -1 : 1 ;
    this.isLiked = !this.isLiked;
  }

}
