import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SbbCard } from '@sbb-esta/lyne-angular/card';
import { SbbTitle } from '@sbb-esta/lyne-angular/title';
import { SbbButtonLink } from '@sbb-esta/lyne-angular/button';

@Component({
  imports: [RouterLink, SbbCard, SbbTitle, SbbButtonLink],
  selector: 'jfu-product-page',
  styleUrl: './product-page.scss',
  templateUrl: './product-page.html',
})
export class ProductPage {
  private readonly route = inject(ActivatedRoute);
  readonly selectedId = toSignal(this.route.paramMap.pipe(map((p) => p.get('id'))), {
    initialValue: null,
  });

  products = [
    {
      id: 'window',
      title: 'Fenster',
      imageUrl: 'products-main/window.png',
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
      imageUrl: 'products-main/door.png',
      description:
        'Die Holztüre, die jeder kennt und liebt, wie auch jedes Kleinkind gerne zuschlägt. Haus-, Innen- und Zimmertüren fertigen wir nach Mass in unserer eigenen Schreinerei.',
      features: [
        'Haus-, Innen- und Zimmertüren',
        'Fertigung nach Mass',
        'Verschiedene Hölzer und Oberflächen',
      ],
    },
    {
      id: 'carpentry-work',
      title: 'Schreinerarbeiten',
      imageUrl: 'products-main/carpentry-work.png',
      description:
        'Wir machen auch allgemeine Schreinerarbeiten, wie zum Beispiel Eckbänke. Ob Möbel, Einbauschrank oder Reparatur: Wir beraten Sie gerne.',
      features: ['Möbel und Eckbänke', 'Einbauschränke', 'Reparaturen und Anpassungen'],
    },
  ];

  constructor() {
    effect(() => {
      const id = this.selectedId();
      if (id) {
        setTimeout(() =>
          document.getElementById('product-' + id)?.scrollIntoView({ behavior: 'smooth' }),
        );
      }
    });
  }
}
