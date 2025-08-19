import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, forwardRef, signal } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MaterialModule } from '@my-product-app/frontend-shared';

type DateRestriction = 'future' | 'past' | 'none';

@Component({
  selector: 'lib-date-picker-field',
  templateUrl: './date-picker-field.component.html',
  styleUrls: ['./date-picker-field.component.scss'],
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerFieldComponent),
      multi: true,
    },
  ],
})
export class DatePickerFieldComponent implements ControlValueAccessor, OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() restriction: DateRestriction = 'none';
  @Input() minDate: Date | null = null;
  @Input() maxDate: Date | null = null;
  @Input() touchUi = false;

  selectedDate = signal<Date | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (value: Date | null) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (this.restriction === 'future') {
      this.minDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1
      ); // Tomorrow
      this.maxDate = null; // No max
    } else if (this.restriction === 'past') {
      this.maxDate = today; // Today allowed or exclude? If exclude, subtract 1 day
      this.minDate = null;
    }
    // If 'none', do nothing (use provided minDate/maxDate if any)
  }

  writeValue(value: Date | null): void {
    this.selectedDate.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(_isDisabled: boolean): void {
    // implement if needed
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const date = event.value ?? null;
    this.selectedDate.set(date);
    this.onChange(date);
    this.onTouched();
  }
}
