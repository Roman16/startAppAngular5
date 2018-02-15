import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private baseUrl = 'http://api.github.com/users/';

    constructor(private _http: Http) {  }

    // getUser() {
    //     return this._http.get(this.baseUrl + username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
    //         .map(res => res.json());
    // }
}