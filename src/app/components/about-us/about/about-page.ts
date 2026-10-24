import { Component } from '@angular/core';
import { YearComponent } from './year-component/year-component';
import { YearEvent } from '../../../services/model/YearEvent';

@Component({
  imports: [YearComponent],
  selector: 'jfu-about-page',
  styleUrl: './about-page.scss',
  templateUrl: './about-page.html',
})
export class AboutPage {
  events: YearEvent[] = [
    {
      id: 1,
      year: 1945,
      title: 'Gründung der Firma',
      description: [
        'Jäger Fritz sen. gründete 1945 die heutige Firma Jäger Fritz & Urs.',
        'Im gleichen Jahr folgte der Bau der Schreinerei, in der sich heute das Schraubenlager der Eisenwarenhandlung und ein Teil des Shops befinden.',
      ],
    },
    {
      id: 2,
      year: 1961,
      title: 'Erster Anbau',
      description: [
        '1961 wurde zum ersten Mal der Platz knapp: Die Schreinerei erhielt einen Anbau, in dem sich heute der Kiosk befindet.',
      ],
    },
    {
      id: 3,
      year: 1972,
      title: 'Büroanbau',
      description: [
        'Dank mehr Platz in der Schreinerei und einem gesteigerten Auftragsvolumen wurde es im Büro immer enger.',
        '1972 entschloss man sich deshalb zu einem Büroanbau auf dem Dach des Schreinereianbaus.',
      ],
    },
    {
      id: 4,
      year: 1974,
      title: 'Erneute Vergrösserung',
      description: [
        'Nur zwei Jahre später machten sich schon wieder Platzprobleme bemerkbar, und die Schreinerei wurde noch einmal vergrössert.',
      ],
    },
    {
      id: 5,
      year: 1980,
      title: 'Der erste Computer',
      description: [
        'Mit der Installation eines Computers für die Administration und die Büroautomation zeigte man bereits 1980, beim Aufkommen der ersten Personal Computer, ein sehr fortschrittliches technologisches Denken.',
      ],
    },
    {
      id: 6,
      year: 1984,
      title: 'Software für die Fensterplanung',
      description: [
        '1984 wurde ein Fensterprogramm installiert, das die Planung von Qualitätsfenstern vereinfachte und beschleunigte.',
        'Dadurch wurde das Fenster für die Kundschaft günstiger, ohne bei der Qualität der Herstellung oder beim Material Kompromisse einzugehen.',
      ],
    },
    {
      id: 7,
      year: 1986,
      title: 'Übernahme der Geschäftsleitung',
      description: [
        'Fritz & Urs übernehmen 1986 die Geschäftsleitung von Jäger Fritz sen., der in den wohlverdienten Ruhestand tritt.',
      ],
    },
    {
      id: 8,
      year: 1987,
      title: 'Neue Schreinerei',
      description: [
        'Ein Jahr nach der Geschäftsübernahme wird die neugebaute Schreinerei in Betrieb genommen.',
        'In den Räumlichkeiten der alten Schreinerei befinden sich heute der Shop, die Eisenwarenhandlung und der Kiosk.',
      ],
    },
    {
      id: 9,
      year: 1988,
      title: 'EMPA-Test',
      description: [
        'Fenster ist nicht gleich Fenster: Deshalb wurden die Holz- und Holz-Metall-Fenster bereits 1988 einem EMPA-Test unterzogen.',
      ],
    },
    {
      id: 10,
      year: 1988,
      title: 'FFF-Qualitätssignet für Holzfenster',
      description: [
        'Ebenfalls 1988 wurden die Holzfenster mit dem Qualitätssignet des Schweizerischen Fassaden- und Fensterfachverbandes (FFF) ausgezeichnet.',
      ],
    },
    {
      id: 11,
      year: 1998,
      title: 'FFF-Qualitätssignet für Holz-Metall-Fenster',
      description: [
        '1998 war es auch für die Holz-Metall-Fenster so weit: Nach harter, aber erfolgreicher Prüfung wurden auch sie mit dem Qualitätssignet des FFF ausgezeichnet.',
      ],
    },
  ];
}
