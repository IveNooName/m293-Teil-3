import { Component } from '@angular/core';
import { History } from '../history/history';
import { Today } from '../today/today';
import { SbbTabNavBar } from '@sbb-esta/lyne-angular/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [History, Today, RouterLink, RouterLinkActive, SbbTabNavBar, RouterOutlet],
  selector: 'jfu-about-page',
  styleUrl: './about-page.scss',
  templateUrl: './about-page.html',
})
export class AboutPage {}
