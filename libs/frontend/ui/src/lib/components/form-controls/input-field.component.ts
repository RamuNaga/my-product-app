import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MaterialModule } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-input-field',
  standalone: true,
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() readonly = false;

  value: any = '';
  isDisabled = false;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  get control() {
    return this.ngControl?.control;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value ?? '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  onBlur() {
    this.onTouched();
  }
}
