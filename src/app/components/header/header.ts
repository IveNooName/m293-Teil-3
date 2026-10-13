import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { SbbButtonLink, SbbTransparentButton, SbbTransparentButtonLink } from '@sbb-esta/lyne-angular/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    SvgIconComponent,
    SbbButtonLink,
    SbbTransparentButtonLink,
    SbbTransparentButton,
    RouterLink,
  ],
  selector: 'jfu-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
