import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  colors = [];

  randColor() {
    for(let num = 0; num < 10; num++){
      const randIdx = Math.floor(Math.random()*this.colors.length + 1)
      if (randIdx == 1) {
        this.colors.push('gold');
      } else if (randIdx == 2) {
        this.colors.push('gray');
      } else if (randIdx == 3) {
          this.colors.push('red');
      } else if (randIdx == 4) {
          this.colors.push('blue');
      } else if (randIdx == 5) {
          this.colors.push('yellow');
      } else if (randIdx == 6) {
          this.colors.push('green');
      } else if (randIdx == 7) {
          this.colors.push('white');
      } else if (randIdx == 8) {
          this.colors.push('orange');
      } else if (randIdx == 9) {
          this.colors.push('black');
      } else if (randIdx == 10) {
          this.colors.push('purple');
      }
    }
  }

  ngOnInit() {
    this.randColor();
  }
}
