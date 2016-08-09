import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [])
.then(() => {
})
.catch(err => console.error(err));
