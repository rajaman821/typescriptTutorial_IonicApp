import { Injectable } from '@angular/core';
import { ApiUrls } from './constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatacesslayerService {

  constructor(public apiUrl: ApiUrls, public http: HttpClient) {
  }

  // typeScriptData() {

  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl.typeScript)
  //       .subscribe(res => {
  //         resolve(res);
  //         //    console.log("Resp from StuReg Call:" + JSON.stringify(responseFromRegisterCall1));
  //       }),
  //       err => {
  //         console.log("Error Stureg : " + err);
  //       }
  //   });
  // }

  // typeScriptData(): Observable<any> {

  //   let headers = new HttpHeaders({ 'Content-type': 'application/json' });
  //   return this.http.get(this.apiUrl.typeScript, { headers });
  // }
}
