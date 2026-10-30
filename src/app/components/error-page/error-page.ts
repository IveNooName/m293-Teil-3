import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SbbButtonLink, SbbSecondaryButtonLink } from '@sbb-esta/lyne-angular/button';

@Component({
  imports: [RouterLink, SbbButtonLink, SbbSecondaryButtonLink],
  selector: 'jfu-error-page',
  styleUrl: './error-page.scss',
  templateUrl: './error-page.html',
})
export class ErrorPage {}
