import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { ErrorPage } from './components/error-page/error-page';
import { AboutPage } from './components/about-us/about/about-page';
import { Today } from './components/about-us/today/today';
import { History } from './components/about-us/history/history';

export const routes: Routes = [
  { path: '', component: LandingPage, pathMatch: 'full' },
  { path: 'about', component: AboutPage, children: [
      { path: '', component: Today },
      { path: 'history', component: History },
    ]},
  { path: '**', component: ErrorPage },
];
