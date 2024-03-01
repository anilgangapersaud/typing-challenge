import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  isWin = false;
  randomText = faker.lorem.sentence();
  enteredText = '';

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
