import { NgFor, NgIf } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'lib-select-field',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFieldComponent {
  @Input() label = '';
  @Input() control!: FormControl;
  @Input() options: { label: string; value: string }[] = [];
  @Input() required = false;
}
