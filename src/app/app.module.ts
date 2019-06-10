import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule, MatIconModule } from '@angular/material';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular-6-social-login-v2';



// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('496119684571-qnrp0d0tnqipu27j0f7vhi7pkcpv99a6.apps.googleusercontent.com')
      }
    ]
  )
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    MatToolbarModule,
    MatIconModule,
    MatIconModule
  ],
  providers: [{
    provide:  AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
