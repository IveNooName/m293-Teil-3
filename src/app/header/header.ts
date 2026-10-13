import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { SbbButtonLink, SbbTransparentButtonLink } from '@sbb-esta/lyne-angular/button';

@Component({
  imports: [SvgIconComponent, SbbButtonLink, SbbTransparentButtonLink],
  selector: 'jfu-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
