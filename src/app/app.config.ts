import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { PageTitleStrategy } from './page-title-strategy';
import { provideHttpClient } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
    provideHttpClient(),
    provideAngularSvgIcon(),
    { provide: LOCALE_ID, useValue: 'de' },
  ],
};
