import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  GoogleLoginProvider,
} from 'angular-6-social-login-v2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private socialAuthService: AuthService) { }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(userData);

      }
    );
  }

  ngOnInit() {
  }
}
