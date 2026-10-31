import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { FooterLink } from '../footer-link/footer-link';

@Component({
  imports: [Logo, FooterLink],
  selector: 'jfu-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
