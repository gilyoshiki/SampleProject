import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import Amplify, { Auth } from 'aws-amplify';

platformBrowserDynamic().bootstrapModule(AppModule);
