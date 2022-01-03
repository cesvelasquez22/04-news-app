import { Component, OnInit } from '@angular/core';
import { Article } from '@interfaces';
import { NewsService } from '@services';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  categories: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  selectedCategory = this.categories[0];
  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService
      .getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe((articles) => (this.articles = articles));
  }

  segmentChanged(event) {
    this.selectedCategory = event.detail.value;
    this.newsService
      .getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe((articles) => (this.articles = articles));
  }

  getTopHeadlinesByCategory(category) {
    return;
  }
}
