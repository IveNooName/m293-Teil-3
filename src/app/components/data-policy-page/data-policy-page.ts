import { Component } from '@angular/core';
import { SbbChipLabel } from '@sbb-esta/lyne-angular/chip-label';
import { DatePipe } from '@angular/common';

@Component({
  imports: [SbbChipLabel, DatePipe],
  selector: 'jfu-data-policy-page',
  styleUrl: './data-policy-page.scss',
  templateUrl: './data-policy-page.html',
})
export class DataPolicyPage {
  protected readonly changeDate: Date = new Date(2026, 9, 26);
}
