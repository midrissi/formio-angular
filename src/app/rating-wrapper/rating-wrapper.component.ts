import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormioCustomComponent } from 'angular-formio';

@Component({
  selector: 'app-rating-wrapper',
  templateUrl: './rating-wrapper.component.html',
  styleUrls: ['./rating-wrapper.component.scss']
})
export class RatingWrapperComponent implements FormioCustomComponent<number> {
  @Input()
  value: number;

  @Output()
  valueChange = new EventEmitter<number>();

  @Input()
  disabled: boolean = true;

  updateValue(payload: number) {
    this.value = payload; // Should be updated first
    this.valueChange.emit(payload); // Should be called after this.value update
  }
}
