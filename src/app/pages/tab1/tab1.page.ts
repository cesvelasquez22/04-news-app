import { Component, OnInit } from '@angular/core';
import { Article } from '@interfaces';
import { NewsService } from '@services';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService
      .getTopHeadlines()
      .subscribe((articles) => this.articles.push(...articles));
  }
}
