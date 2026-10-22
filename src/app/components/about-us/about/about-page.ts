import { Component } from '@angular/core';
import { SbbTabNavBar } from '@sbb-esta/lyne-angular/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, SbbTabNavBar, RouterOutlet],
  selector: 'jfu-about-page',
  styleUrl: './about-page.scss',
  templateUrl: './about-page.html',
})
export class AboutPage {}
