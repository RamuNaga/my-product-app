import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MaterialModule } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-input-field',
  host: { '[attr.data-component-id]': "'unique-id-1'" },
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFieldComponent,
      multi: true,
    },
  ],
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, NgIf],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text'; // text, email, password, etc.
  @Input() required = false;

  // Initialize control by default so it is never undefined
  @Input() control: FormControl = new FormControl('');

  @Input() readonly = false;

  @Output() valueChange = new EventEmitter<string>();
  /* eslint-disable @typescript-eslint/no-empty-function */
  private onChange: (value: any) => void = () => {};

  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
    this.control.valueChanges.subscribe((val) => {
      this.valueChange.emit(val);
      this.onChange(val);
    });
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onBlur(): void {
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
}
