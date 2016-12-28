import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: { class: "row" } // 5
})
export class ArticleComponent implements OnInit {
    votes: number; // 6
    title: string; // 7
    link: string; // 8

  constructor() { // 9
    this.title = "Angular 2";
    this.link = "http//angular.io";
    this.votes = 10;
  }

  // 10
  voteUp() {
    this.votes++;
    return false; // 11
  }

  voteDown() {
    this.votes--;
    return false; // 11
  }

  ngOnInit() {
  }

}
