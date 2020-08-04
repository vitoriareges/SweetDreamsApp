import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
SendVerificationMail() {
  return this.ngFireAuth.auth.currentUser.sendEmailVerification()
  .then(() => {
    this.router.navigate(['verify-email']);
  })
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
