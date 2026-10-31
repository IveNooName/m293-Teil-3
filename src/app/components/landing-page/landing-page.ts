import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SbbCard } from '@sbb-esta/lyne-angular/card';
import { SbbNotification } from '@sbb-esta/lyne-angular/notification';
import { SbbTitle } from '@sbb-esta/lyne-angular/title';
import { SbbTransparentButtonLink } from '@sbb-esta/lyne-angular/button';

@Component({
  imports: [RouterLink, SbbCard, SbbNotification, SbbTitle, SbbTransparentButtonLink],
  selector: 'jfu-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {
  productCards = [
    {
      id: 1,
      title: 'Fenster',
      imageUrl: 'images/products/main/window.png',
      description:
        'Das bewährte Holzfenster wird aus einem der besten, umweltfreundlichsten und zudem aus einheimischen Rohstoffen gefertigt.',
      link: '/products/window',
    },
    {
      id: 2,
      title: 'Tür',
      imageUrl: 'images/products/main/door.png',
      description:
        'Die Holztüre, robust gefertigt und individuell auf Ihr Zuhause abgestimmt – für Haus- und Zimmertüren.',
      link: '/products/door',
    },
    {
      id: 3,
      title: 'Schreinerarbeiten',
      imageUrl: 'images/products/main/carpentry-work.png',
      description: 'Wir machen auch allgemeine Schreinerarbeiten, wie zum Beispiel Eckbänke.',
      link: '/products/carpentry-work',
    },
  ];
}
