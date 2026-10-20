import { Component } from '@angular/core';
import { SbbLinkList } from '@sbb-esta/lyne-angular/link-list';
import { SbbLink } from '@sbb-esta/lyne-angular/link';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { FooterLink } from '../footer-link/footer-link';
import { SbbDivider } from '@sbb-esta/lyne-angular/divider';

@Component({
  imports: [SbbLinkList, SbbLink, RouterLink, SvgIconComponent, FooterLink, SbbDivider],
  selector: 'jfu-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
