import { Component } from '@angular/core';
import { lorem, random } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typing';

  randomText = lorem.sentence();
  // firstNumber: number = 0;
  enteredText = '';

  // timer(){

  //   while (this.randomText !== this.enteredText) {
  //     setInterval( () => this.incrementNumber(this.firstNumber), 1000)

  //   }

  // }

  // incrementNumber(num: number) {
  //   this.firstNumber++;
  // }

  onInput(event: Event) {
    this.enteredText = (event.target as HTMLInputElement).value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}

