import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

const SITE_NAME = 'Jäger Fritz & Urs';

/** Setzt den Seitentitel im Format «Seite | Jäger Fritz & Urs». */
@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    this.title.setTitle(pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME);
  }
}
