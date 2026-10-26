import { Component, Signal } from '@angular/core';
import { SbbChipLabel } from '@sbb-esta/lyne-angular/chip-label';
import { DatePipe } from '@angular/common';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  imports: [SbbChipLabel, DatePipe],
  selector: 'jfu-data-policy-page',
  styleUrl: './data-policy-page.scss',
  templateUrl: './data-policy-page.html',
})
export class DataPolicyPage {
  protected readonly changeDate: Date = new Date(2026, 9, 26);

  private bp = inject(BreakpointObserver);
  isSmall: Signal<boolean> = toSignal(
    this.bp.observe('(max-width: 480px)').pipe(map((r) => r.matches)),
    { initialValue: false },
  );
}
