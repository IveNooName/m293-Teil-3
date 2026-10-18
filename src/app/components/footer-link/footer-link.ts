import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'jfu-footer-link',
  styleUrl: './footer-link.scss',
  templateUrl: './footer-link.html',
})
export class FooterLink {

  link = input.required<string>();
  label = input.required<string>();
  ariaLabel = input<string>()

}
