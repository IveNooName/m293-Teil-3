import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SbbSidebar, SbbSidebarCloseButton, SbbSidebarContainer, SbbSidebarContent, SbbSidebarTitle } from '@sbb-esta/lyne-angular/sidebar';
import { SbbLinkList } from '@sbb-esta/lyne-angular/link-list';
import { SbbBlockLink } from '@sbb-esta/lyne-angular/link';
import { SbbSecondaryButton } from '@sbb-esta/lyne-angular/button';
import { SbbNavigation, SbbNavigationButton, SbbNavigationLink, SbbNavigationList, SbbNavigationMarker,
  SbbNavigationSection, SbbNavigationSectionTrigger, SbbNavigationTrigger } from '@sbb-esta/lyne-angular/navigation';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  imports: [
    RouterOutlet,
    Header,
    SbbSidebarContainer,
    SbbSidebar,
    SbbLinkList,
    SbbSidebarCloseButton,
    SbbSidebarTitle,
    SbbSidebarContent,
    SbbBlockLink,
    RouterLinkActive,
    RouterLink,
    SbbSecondaryButton,
    SbbNavigation,
    SbbNavigationMarker,
    SbbNavigationTrigger,
    SbbNavigationButton,
    SbbNavigationSectionTrigger,
    SbbNavigationSection,
    NgTemplateOutlet,
    SbbNavigationList,
    SbbNavigationLink,
  ],
  selector: 'jfu-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('m293-Teil-3');
}
