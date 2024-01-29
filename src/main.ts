import { bootstrapApplication } from '@angular/platform-browser';
import { getNessieAssetPath } from '@nessie/webcomponents';
import { defineCustomElements } from '@nessie/webcomponents/loader';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

defineCustomElements();

defineCustomElements(window, {
  resourcesUrl: getNessieAssetPath(),
});
