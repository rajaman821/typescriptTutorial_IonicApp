import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DatacesslayerService } from '../datacesslayer.service';
import { PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';


declare var hljs: any;
@Component({
    selector: 'app-tutpages',
    templateUrl: './tutpages.page.html',
    styleUrls: ['./tutpages.page.scss'],
})
export class TutpagesPage implements OnInit {
    obj: any;
    data: any;
    id: any;
    userArr: {};
    nextVal: any;
    resValue: any;
    idValue: any;
    num: number;
    val: any;
    val1: any;
    numVal: any;
    fontSize: number = 13;
    topicName: any;


    constructor(public activatedRoute: ActivatedRoute, public datacesslayer: DatacesslayerService,
        public popoverController: PopoverController, public storage: Storage,
        private admobFree: AdMobFree) {
        this.showBannerAd();
        this.showInterstitialAds();
        this.obj = this.activatedRoute.snapshot.paramMap.get('id');
        this.getData();
        this.setNext(this.obj);

        this.set(this.obj);
        setTimeout(function () {
            var aCodes = document.getElementsByTagName('pre');
            for (var i = 0; i < aCodes.length; i++) {
                hljs.highlightBlock(aCodes[i]);
            }

        }, 80);
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

    getData() {

        this.storage.get('key').then((res) => {
            for (var i = 0; i < 17; i++) {
                this.resValue = res[i];
                this.idValue = this.resValue['topic_id'];
                this.id = this.idValue;
                if (this.idValue == this.obj) {
                    this.userArr = this.resValue;
                    setTimeout(function () {
                        var aCodes = document.getElementsByTagName('pre');
                        for (var i = 0; i < aCodes.length; i++) {
                            hljs.highlightBlock(aCodes[i]);
                        }
                    }, 100);;
                }
            }
        });
    }

    setNext(numbers) {
        this.val1 = numbers;
    }



    next() {
        this.storage.get('key').then((res) => {
            if (this.val1 < 17) {
                this.nextVal = ++this.val1;
            }
            for (var j = 0; j < 17; j++) {
                if (this.nextVal == res[j].topic_id) {
                    this.set(this.nextVal);
                    this.userArr = res[j];
                    setTimeout(function () {
                        var aCodes = document.getElementsByTagName('pre');
                        for (var i = 0; i < aCodes.length; i++) {
                            hljs.highlightBlock(aCodes[i]);
                        }
                    }, 100);
                }

            }
        });
    }

    set(id) {
        this.val = id;
    }

    prev() {
        this.storage.get('key').then((res) => {
            if (this.val1 != 1) {
                this.nextVal = --this.val1;

                if (this.val != 1) {
                    this.num = --this.val;
                }
            }
            for (var k = 16; k >= 0; k--) {
                if (this.num == res[k].topic_id) {
                    this.userArr = res[k];
                    setTimeout(function () {
                        var aCodes = document.getElementsByTagName('pre');
                        for (var i = 0; i < aCodes.length; i++) {
                            hljs.highlightBlock(aCodes[i]);
                        }

                    }, 100);
                }
            }
        });
    }

    fontSizeChange(size: number) {
        this.fontSize = size;
    }

    ngOnInit() {

    }

}