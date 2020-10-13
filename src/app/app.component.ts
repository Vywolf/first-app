import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowed = false;
  arrayOfClicks = [];

  toggleTheParagraph() {
    this.isShowed = !this.isShowed;
    this.arrayOfClicks.push(Date.now());
    
  }

  setBackgroundColor(i: number) {
    return {'background-color': i >= 5 ? 'blue' : 'white'};
  }

  setLetterColor(i: number) {
    return {'whiteLetter': i >= 5};
  }
}
