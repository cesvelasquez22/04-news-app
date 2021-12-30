import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsResponse } from './news.interfaces';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlines() {
    return this.http.get<NewsResponse>(
      `${environment.apiUrl}/top-headlines?country=us&category=business`, { params: { apiKey: environment.apiKey} }
    );
  }
}
