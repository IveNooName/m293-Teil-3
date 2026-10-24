import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { ErrorPage } from './components/error-page/error-page';
import { AboutPage } from './components/about-us/about/about-page';

export const routes: Routes = [
  { path: '', component: LandingPage, pathMatch: 'full' },
  { path: 'about', component: AboutPage },
  { path: '**', component: ErrorPage },
];
