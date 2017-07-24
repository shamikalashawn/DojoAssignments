import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class HttpService {
  githubUrl:string;

  constructor(private _http: Http) { }
  retrieveGitHub(username) {
    this.githubUrl = 'https://api.github.com/users/' + username;
    return this._http.get(this.githubUrl).map(data=>data.json()).toPromise()
  }
}