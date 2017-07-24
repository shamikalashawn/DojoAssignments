import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    username: "",
    score: 0,
    errors: "",
    found: false,
  }

  constructor(private _httpService: HttpService){}
  onSubmit(form){
    this._httpService.retrieveGitHub(this.user.username)
    .then( data => {
      this.user.score = data.public_repos + data.followers;
      this.user.found = true;
    })
    .catch( err => {
      console.log(err); 
      this.user.found = false;
    })
  }

  resetForm(form){
    form.reset();
    this.user = {
      username: "",
      score: 0,
      errors: "",
      found: false,
    }
  }

}
