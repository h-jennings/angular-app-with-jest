import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-example',
  template: `
    <button (click)="value = value - 1">Decrement</button>
    <span data-testid="value">{{ value }}</span>
    <button (click)="value = value + 1">Increment</button>

    <button (click)="sendValue.emit(value)">Send</button>
  `,
  styleUrls: ['./input-output-example.component.scss'],
})
export class InputOutputExampleComponent implements OnInit {
  @Input() value = 0;
  @Output() sendValue = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
}
