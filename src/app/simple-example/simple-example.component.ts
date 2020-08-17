import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SimpleExampleService } from './simple-example.service';

@Component({
  selector: 'app-simple-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './simple-example.component.html',
  styleUrls: ['./simple-example.component.scss'],
})
export class SimpleExampleComponent implements OnInit {
  value = 0;
  mockApiData$ = this.apiService.getMockApiData();

  constructor(private apiService: SimpleExampleService) {}

  ngOnInit(): void {}
}
