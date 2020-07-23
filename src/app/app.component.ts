import { Component } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';
import { DatacesslayerService } from './datacesslayer.service';
import { Storage } from '@ionic/storage';
import { NavController, AlertController, MenuController } from '@ionic/angular';
import { ApiUrls } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  user: any = [];
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },

    {
      title: 'Interview Questions',
      url: '/interview',
      icon: 'ios-book'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'logo-buffer'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private socialSharing: SocialSharing,
    private appRate: AppRate,
    public route: Router,
    private network: Network,
    public toastController: ToastController,
    public datacesslayer: DatacesslayerService,
    public storage: Storage,
    public alertController: AlertController,
    public apiUrl: ApiUrls
  ) {
    this.getData();
    this.initializeApp();
    // this.checkForDisconnectedNetwork();
    this.getValue();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
    this.backbuttonSubscribeMethod();
  }

  getData() {
    this.user = this.apiUrl.typeScript
    this.storage.set("key", this.user);
  }

  getValue() {

    this.storage.get('key').then((val) => {
      console.log(val);
      if (val == null || val == undefined) {
        this.storage.set("key", this.user);
      }
    });
  }

  share() {
    this.socialSharing.share('Share the app with your beloved ones.', 'test', null, 'https://play.google.com/store/apps/details?id=com.techprocompsoft.angular6&hl=en').then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
  }

  rate() {
    this.appRate.preferences.storeAppURL =
    {

      android: 'https://play.google.com/store/apps/details?id=com.techprocompsoft.angular6&hl=en',

    };
    this.appRate.promptForRating(true);
  }

  backbuttonSubscribeMethod() {
    this.platform.backButton.subscribe(() => {
      if (this.route.url == '/home') {
        navigator['app'].exitApp();
      }
    });
  }
}

