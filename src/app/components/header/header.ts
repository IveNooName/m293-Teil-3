import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { SbbTransparentButton, SbbTransparentButtonLink } from '@sbb-esta/lyne-angular/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SbbHeaderLink } from '@sbb-esta/lyne-angular/header';

@Component({
  imports: [
    Logo,
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
