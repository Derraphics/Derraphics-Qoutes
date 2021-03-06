import { Quote } from './../../models/quote';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() {}

  ngOnInit(): void {}
}
