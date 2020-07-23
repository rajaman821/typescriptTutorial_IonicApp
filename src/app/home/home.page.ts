import { Component, OnInit } from '@angular/core';
import { DatacesslayerService } from '../datacesslayer.service';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';
import { ApiUrls } from '../constants';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    data: any;
    userArr: any = [];
    user: any = [];
    constructor(public datacesslayer: DatacesslayerService,
        public router: Router,
        public menuCtrl: MenuController,
        public storage: Storage,
        private network: Network,
        public toastController: ToastController,
        public alertController: AlertController,
        public apiUrl: ApiUrls,
        private admobFree: AdMobFree) {
        // this.getData();
        this.showBannerAd();
        this.showInterstitialAds();
    }

    showBannerAd() {
        let bannerConfig: AdMobFreeBannerConfig = {
            // isTesting: true, // Remove in production
            autoShow: true,//
            id: "ca-app-pub-4431981785018302/4274604439"
        };
        this.admobFree.banner.config(bannerConfig);

        this.admobFree.banner.prepare().then(() => {
            // success
        }).catch(e => console.log(e));
    }

    showInterstitialAds() {
        let interstitialConfig: AdMobFreeInterstitialConfig = {
            // isTesting: true, // Remove in production
            autoShow: true,//,
            id: "ca-app-pub-4431981785018302/7356951391"
        };
        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.prepare().then(() => {
        }).catch(e => console.log(e));
    }

    ngOnInit() {
        this.userArr = this.apiUrl.typeScript
    }

    pass(id) {
        this.router.navigate(['/tutpages', { id }]);
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }

}