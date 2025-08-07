import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  output,
  computed,
  ViewChild,
  signal,
  OnInit,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MaterialModule } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-ui-signup-stepper',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    MatStepperModule,
  ],
  templateUrl: './signup-stepper.component.html',
  styleUrls: ['./signup-stepper.component.scss'],
})
export class SignupStepperComponent implements OnInit {
  @ViewChild(MatStepper) stepper!: MatStepper;

  readonly signupForm = input<FormGroup>();
  readonly companyGroup = input<FormGroup>();
  readonly locationGroup = input<FormGroup>();
  readonly userGroup = input<FormGroup>();

  readonly formSubmitted = output<void>();

  private formValidSignal = signal(false);

  readonly isFormValid = computed(() => this.formValidSignal());

  ngOnInit() {
    const form = this.signupForm();
    if (form) {
      this.formValidSignal.set(form.valid);
      form.statusChanges.subscribe(() => {
        this.formValidSignal.set(form.valid);
      });
    }
  }

  onSubmit(): void {
    const form = this.signupForm();
    if (form?.valid) {
      this.formSubmitted.emit();
    } else if (form) {
      this.markAllAsTouched(form);
    }
  }

  goNext(): void {
    this.stepper.next();
  }

  goBack(): void {
    this.stepper.previous();
  }

  private markAllAsTouched(group: FormGroup): void {
    Object.values(group.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
