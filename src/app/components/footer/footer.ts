import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { FooterLink } from '../footer-link/footer-link';

@Component({
  imports: [SvgIconComponent, FooterLink],
  selector: 'jfu-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
