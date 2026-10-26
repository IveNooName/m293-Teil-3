import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { ErrorPage } from './components/error-page/error-page';
import { AboutPage } from './components/about-us/about-page';
import { DataPolicyPage } from './components/data-policy-page/data-policy-page';

export const routes: Routes = [
  { path: '', component: LandingPage, pathMatch: 'full' },
  { path: 'about', component: AboutPage },
  { path: 'data-policy', component: DataPolicyPage },
  { path: '**', component: ErrorPage },
];
