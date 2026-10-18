import { Component } from '@angular/core';
import { SbbLinkList } from '@sbb-esta/lyne-angular/link-list';
import { SbbLink } from '@sbb-esta/lyne-angular/link';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  imports: [SbbLinkList, SbbLink, RouterLink, SvgIconComponent],
  selector: 'jfu-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
