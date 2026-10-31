import { Component, effect, HostListener, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SbbCard } from '@sbb-esta/lyne-angular/card';
import { SbbTitle } from '@sbb-esta/lyne-angular/title';
import { SbbButtonLink } from '@sbb-esta/lyne-angular/button';
import { SbbCompactPaginator } from '@sbb-esta/lyne-angular/paginator';
import { SbbCarousel, SbbCarouselItem, SbbCarouselList } from '@sbb-esta/lyne-angular/carousel';

@Component({
  imports: [
    RouterLink,
    SbbCard,
    SbbTitle,
    SbbButtonLink,
    SbbCarousel,
    SbbCarouselList,
    SbbCarouselItem,
    SbbCompactPaginator,
  ],
  selector: 'jfu-product-page',
  styleUrl: './product-page.scss',
  templateUrl: './product-page.html',
})
export class ProductPage {
  private readonly route = inject(ActivatedRoute);
  readonly selectedId = toSignal(this.route.paramMap.pipe(map((p) => p.get('id'))), {
    initialValue: null,
  });

  readonly highlightedId = signal<string | null>(null);

  @HostListener('document:click')
  clearHighlight() {
    this.highlightedId.set(null);
  }

  products = [
    {
      id: 'window',
      title: 'Fenster',
      images: [
        { src: 'images/products/window/1.jpg', alt: 'Bogenfenster mit Balkontür und Blick auf die Berge' },
        { src: 'images/products/window/2.jpg', alt: 'Holzfenster unter der Dachschräge eines Wohnraums' },
        { src: 'images/products/window/3.jpg', alt: 'Holzfenster mit Rundbogen hinter roten Vorhängen' },
        {
          src: 'images/products/window/4.jpg',
          alt: 'Dreiteiliges Fenster mit Metallrahmen in einer Steinfassade',
        },
        { src: 'images/products/window/5.jpg', alt: 'Gebogene Fensterfront mit weissen Rahmen' },
        { src: 'images/products/window/6.jpg', alt: 'Weisses Fenster mit Oberlicht in einer Holzfassade' },
      ],
      description:
        'Das bewährte Holzfenster wird aus einem der besten, umweltfreundlichsten und zudem aus einheimischen Rohstoffen gefertigt. Unsere Holz- und Holz-Metall-Fenster sind EMPA-geprüft und tragen das FFF-Qualitätssignet.',
      features: [
        'Holz- und Holz-Metall-Fenster',
        'Einheimische, nachhaltige Rohstoffe',
        'Individuelle Planung und Fertigung',
        'FFF-Qualitätssignet',
      ],
    },
    {
      id: 'door',
      title: 'Tür',
      images: [
        { src: 'images/products/door/1.jpg', alt: 'Weisse Haustür mit geometrischen Glaselementen' },
        { src: 'images/products/door/2.jpg', alt: 'Haustür aus Holz mit Füllungen und Seitenfenstern' },
        { src: 'images/products/door/3.jpg', alt: 'Wohnungstür aus hellem Holz mit blauer Zarge' },
        { src: 'images/products/door/4.jpg', alt: 'Holztür mit Holzzarge im Durchgang zur Küche' },
        { src: 'images/products/door/5.jpg', alt: 'Zimmertür-Rahmen aus Holz in einem hellen Raum' },
        { src: 'images/products/door/6.jpg', alt: 'Orange Innentür neben einem Treppenhaus' },
      ],
      description:
        'Die Holztüre, robust gefertigt und individuell auf Ihr Zuhause abgestimmt. Haus-, Innen- und Zimmertüren fertigen wir nach Mass in unserer eigenen Schreinerei.',
      features: [
        'Haus-, Innen- und Zimmertüren',
        'Fertigung nach Mass',
        'Verschiedene Hölzer und Oberflächen',
      ],
    },
    {
      id: 'carpentry-work',
      title: 'Schreinerarbeiten',
      images: [
        { src: 'images/products/carpentry-work/1.jpg', alt: 'Eckbank aus Holz mit Rückenlehne' },
        { src: 'images/products/carpentry-work/2.jpg', alt: 'Küche mit Holzwand, Stühlen und Korkboden' },
      ],
      description:
        'Wir machen auch allgemeine Schreinerarbeiten, wie zum Beispiel Eckbänke. Ob Möbel, Einbauschrank oder Reparatur: Wir beraten Sie gerne.',
      features: ['Möbel und Eckbänke', 'Einbauschränke', 'Reparaturen und Anpassungen'],
    },
  ];

  constructor() {
    effect(() => {
      const id = this.selectedId();
      this.highlightedId.set(id);
      if (id) {
        this.scrollToProduct(id);
      }
    });
  }

  // While the navigation menu is still closing, it locks scrolling on the body (overflow: hidden),
  // so scrollIntoView would do nothing. Wait until the lock is gone (max. ~2s).
  private scrollToProduct(id: string, attempt = 0) {
    const locked = getComputedStyle(document.body).overflow === 'hidden';
    if (locked && attempt < 120) {
      requestAnimationFrame(() => this.scrollToProduct(id, attempt + 1));
      return;
    }
    document.getElementById('product-' + id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
