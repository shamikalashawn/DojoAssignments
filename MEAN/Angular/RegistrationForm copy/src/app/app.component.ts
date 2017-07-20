import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    streetAddress: "",
    unitAptNumber: "",
    city: "",
    state: "",
    lucky: ""
  }
  users = [];

  onSubmit(event){
    event.preventDefault();
    this.submitted = true;
    this.users.push(this.user);
    this.user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    streetAddress: "",
    unitAptNumber: "",
    city: "",
    state: "",
    lucky: ""
    };
  }
}
