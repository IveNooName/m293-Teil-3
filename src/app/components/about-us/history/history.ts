import { Component } from '@angular/core';
import { YearComponent } from './year-component/year-component';
import { YearEvent } from '../../../services/model/YearEvent';

@Component({
  imports: [YearComponent],
  selector: 'jfu-history',
  styleUrl: './history.scss',
  templateUrl: './history.html',
})
export class History {
  events: YearEvent[] = [
    {
      id: 1,
      year: 1945,
      title: 'Gründung der Firma',
      description:
        'Jäger Fritz Sen. gründete im Jahre 1945 die heutige Firma Jäger Fritz & Urs. Im gleichen Jahr folgte der Bau der Schreinerei, in der sich heute das Schraubenlager der Eisenwarenhandlung und ein Teil des Shops befinden.',
    },
    {
      id: 2,
      year: 1961,
      title: 'Anbau',
      description:
        '1961 wurde zum ersten Mal der Platz knapp und der Schreinerei wurde der Teil angebaut in dem sich Heute der Kiosk befindet.',
    },
  ];
}
