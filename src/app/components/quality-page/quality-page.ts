import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SbbTableWrapper } from '@sbb-esta/lyne-angular/table';
import { SbbButtonLink } from '@sbb-esta/lyne-angular/button';

@Component({
  imports: [RouterLink, SbbTableWrapper, SbbButtonLink],
  selector: 'jfu-quality-page',
  styleUrl: './quality-page.scss',
  templateUrl: './quality-page.html',
})
export class QualityPage {
  comparison = [
    { label: 'Rahmen innen', wood: 'Holz', woodMetal: 'Holz' },
    { label: 'Rahmen aussen', wood: 'Holz', woodMetal: 'Aluminium-Deckschale' },
    {
      label: 'Wetterschutz',
      wood: 'Regelmässiger Anstrich nötig',
      woodMetal: 'Sehr wetterbeständig',
    },
    { label: 'Unterhalt', wood: 'Mittel', woodMetal: 'Gering' },
    { label: 'Lebensdauer', wood: 'ca. 30–40 Jahre', woodMetal: 'ca. 40–50 Jahre' },
    {
      label: 'Optik',
      wood: 'Natürlich, innen und aussen Holz',
      woodMetal: 'Innen Holz, aussen modern',
    },
    { label: 'Preis', wood: 'Günstiger', woodMetal: 'Höher' },
  ];
}
