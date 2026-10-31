import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SbbNotification } from '@sbb-esta/lyne-angular/notification';
import { SbbTitle } from '@sbb-esta/lyne-angular/title';

@Component({
  imports: [RouterLink, SbbNotification, SbbTitle],
  selector: 'jfu-imprint-page',
  styleUrl: './imprint-page.scss',
  templateUrl: './imprint-page.html',
})
export class ImprintPage {}
