import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: { class: "row" } // 5
})
export class ArticleComponent implements OnInit {
    @Input() article: Article; // 16, 24
    // 20
    // votes: number; // 6
    // title: string; // 7
    // link: string; // 8

  // constructor() { // 9
  //   // 20
  //   // this.title = "Angular 2";
  //   // this.link = "http//angular.io";
  //   // this.votes = 10;
  //   this.article = new Article( // 23
  //     'Angular 2',
  //     'http://angular.io',
  //     10);
  // }

  // 10
  voteUp(): boolean { // 18
    // this.article.votes++; // 17
    this.article.voteUp(); // 19
    return false; // 11
  }

  voteDown(): boolean { // 18
    // this.article.votes--; // 17
    this.article.voteDown(); // 19
    return false; // 11
  }

  ngOnInit() {
  }

}
