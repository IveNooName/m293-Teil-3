import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { SbbTransparentButton, SbbTransparentButtonLink } from '@sbb-esta/lyne-angular/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SbbHeaderLink } from '@sbb-esta/lyne-angular/header';

@Component({
  imports: [
    SvgIconComponent,
    SbbTransparentButtonLink,
    SbbTransparentButton,
    RouterLink,
    RouterLinkActive,
    SbbHeaderLink,
  ],
  selector: 'jfu-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
