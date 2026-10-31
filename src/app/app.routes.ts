import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { ErrorPage } from './components/error-page/error-page';
import { AboutPage } from './components/about-us/about-page';
import { DataPolicyPage } from './components/data-policy-page/data-policy-page';
import { ImprintPage } from './components/imprint-page/imprint-page';
import { ContactPage } from './components/contact-page/contact-page';
import { QualityPage } from './components/quality-page/quality-page';
import { ProductPage } from './components/product-page/product-page';

export const routes: Routes = [
  { path: '', component: LandingPage, pathMatch: 'full' },
  { path: 'products', component: ProductPage, title: 'Produkte' },
  { path: 'products/:id', component: ProductPage, title: 'Produkte' },
  { path: 'about', component: AboutPage, title: 'Über uns' },
  { path: 'quality', component: QualityPage, title: 'Qualität' },
  { path: 'contact', component: ContactPage, title: 'Kontakt' },
  { path: 'imprint', component: ImprintPage, title: 'Impressum' },
  { path: 'data-policy', component: DataPolicyPage, title: 'Datenschutz' },
  { path: '**', component: ErrorPage, title: 'Seite nicht gefunden' },
];
