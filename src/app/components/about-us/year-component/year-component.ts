import { Component, input } from '@angular/core';
import { YearEvent } from '../../../services/model/YearEvent';

@Component({
  imports: [],
  selector: 'jfu-year-component',
  styleUrl: './year-component.scss',
  templateUrl: './year-component.html',
})
export class YearComponent {
  event = input.required<YearEvent>()
}
