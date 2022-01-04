import { Component, Input, OnInit } from '@angular/core';
import {
  ActionSheetButton,
  ActionSheetController,
  Platform,
} from '@ionic/angular';
import { Article } from '@interfaces';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() index: number;
  @Input() article: Article;

  constructor(
    private iab: InAppBrowser,
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing
  ) {}

  openArticle() {
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url);
      browser.show();
      return;
    }

    window.open(this.article.url, '_blank');
  }

  async onOpenMenu() {
    const buttons: ActionSheetButton[] = [
      {
        text: 'Favorito',
        icon: 'heart-outline',
        handler: () => this.onToogleFavorite(),
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel',
      },
    ];

    const share: ActionSheetButton = {
      text: 'Compartir',
      icon: 'share-outline',
      handler: () => this.onShareArticle(),
    };

    if (this.platform.is('capacitor')) {
      buttons.unshift(share);
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons,
    });

    await actionSheet.present();
  }

  onShareArticle() {
    const { title, source, url } = this.article;

    this.socialSharing.share(title, source.name, null, url);
  }

  onToogleFavorite() {
    console.log('onToogleFavorite');
  }
}
