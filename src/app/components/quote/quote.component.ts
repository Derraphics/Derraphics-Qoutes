import { Quote } from './../../models/quote';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'The Best Way To Get Started Is To Quit Talking And Begin Doing.',
      'Walt Disney',
      'Walt Disney',
      0,
      0
    ),
    new Quote(
      2,
      'Don’t Let Yesterday Take Up Too Much Of Today.',
      'Will Rogers',
      'Will Rogers',
      0,
      0
    ),
    new Quote(
      3,
      'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
      'Will Rogers',
      'Will Rogersh',
      0,
      0
    ),
    new Quote(
      4,
      'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
      'Vince Lombardir',
      'Vince Lombardi',
      0,
      0
    ),
    new Quote(
      5,
      "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
      'Will Rogers',
      'Will Rogers',
      0,
      0
    ),
    new Quote(
      4,
      'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
      'Mohnish Pabrai',
      'Mohnish Pabrai',
      0,
      0
    ),
    new Quote(
      4,
      'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
      'Maya Angelou',
      'Maya Angelou',
      0,
      0
    ),
  ];
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
