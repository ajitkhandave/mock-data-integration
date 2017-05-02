import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewserviceService {
    API_BASE_URL:string = "http://localhost:4200/";
    ENDPOINT_URL:string = "/src/apidata/mockData.json";
    //this.API_BASE_URL + "/" + this.ENDPOINT_URL
   private _url: string = "apidata/mockData.json";
  constructor(private _http: Http) { }

   getData(){
        return this._http.get(this.ENDPOINT_URL)
            .map((response:Response) => response.json());
        }
}
