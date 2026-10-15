import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import {
  SbbNavigation,
  SbbNavigationButton,
  SbbNavigationLink,
  SbbNavigationList,
  SbbNavigationMarker,
  SbbNavigationSection,
  SbbNavigationSectionTrigger,
} from '@sbb-esta/lyne-angular/navigation';
import { Footer } from './components/footer/footer';

@Component({
  imports: [
    RouterOutlet,
    Header,
    RouterLink,
    SbbNavigation,
    SbbNavigationMarker,
    SbbNavigationButton,
    SbbNavigationSectionTrigger,
    SbbNavigationSection,
    SbbNavigationList,
    SbbNavigationLink,
    Footer,
  ],
  selector: 'jfu-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('m293-Teil-3');
}
