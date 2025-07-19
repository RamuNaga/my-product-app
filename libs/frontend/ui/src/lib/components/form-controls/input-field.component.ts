import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms'; // Required for FormControl usage
import { NgIf } from '@angular/common';
import { MaterialModule } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-input-field',
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
  @Input() control: FormControl = new FormControl('');

  @Output() valueChange = new EventEmitter<string>();

  onTouched(): void {
    // intentionally left empty: ControlValueAccessor callback
  }
  onChange: (value: any) => void = () => {
    // noop until registered
  };

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.control.valueChanges.subscribe((val) => {
      this.valueChange.emit(val);
      this.onChange(val);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
}
