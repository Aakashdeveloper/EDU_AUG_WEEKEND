import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


/*
Module==>  All Declrataions is done here
Component==> Html/css & logical
Pipe==> Run time data manupulation
Service==> Connect to third party
Routing==> Maintain single page& menu bar
*/
