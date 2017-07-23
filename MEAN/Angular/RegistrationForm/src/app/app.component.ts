import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  user = new User();
  users = [];

  onSubmit(form){
    // form.preventDefault();
    this.submitted = true;
    this.users.push(this.user);
    console.log('users: ', this.users);
    console.log('submitted: ', this.submitted)
    this.user = new User();
    form.reset();
  }
}
