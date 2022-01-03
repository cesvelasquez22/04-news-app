import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '@interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<Article[]> {
    return this.http
      .get<NewsResponse>(
        `${environment.apiUrl}/top-headlines?country=us&category=business`,
        { params: { apiKey: environment.apiKey } }
      )
      .pipe(map(({ articles }) => articles));
  }

  getTopHeadlinesByCategory(category: string) {
    return this.http
      .get<NewsResponse>(
        `${environment.apiUrl}/top-headlines?country=us&category=${category}`,
        { params: { apiKey: environment.apiKey } }
      )
      .pipe(map(({ articles }) => articles));
  }
}
