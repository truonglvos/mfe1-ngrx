import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Mfe1Module } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(Mfe1Module)
  .catch((err) => console.error(err));
