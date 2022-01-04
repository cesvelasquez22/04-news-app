import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Article } from '@interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() index: number;
  @Input() article: Article;

  constructor(private iab: InAppBrowser, private platform: Platform) {}

  openArticle() {
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url);
      browser.show();
      return;
    }

    window.open(this.article.url, '_blank');
  }
}
