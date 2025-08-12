import {
  Component,
  ViewChild,
  OnDestroy,
  inject,
  effect,
  EffectRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MaterialModule,
  SignupFormStore,
} from '@my-product-app/frontend-shared';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user/user-form.component';
import { CompanyFormComponent } from '../company/company-form.component';
import { LocationFormComponent } from '../location/location-form.component';
import { CompanySelectComponent } from '../company/company-select.component';

@Component({
  selector: 'lib-ui-signup-stepper',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    UserFormComponent,
    CompanyFormComponent,
    LocationFormComponent,
    CompanySelectComponent,
  ],
  templateUrl: './signup-stepper.component.html',
  styleUrls: ['./signup-stepper.component.scss'],
})
export class SignupStepperComponent implements OnDestroy {
  @ViewChild(MatStepper) stepper!: MatStepper;
  store = inject(SignupFormStore);

  // Signals for reactive access
  isNewCompany = this.store.isNewCompany;

  private cleanupEffect?: EffectRef;
  @Output() submitEvent = new EventEmitter<void>();

  constructor() {
    this.store.initForm();

    this.cleanupEffect = effect(() => {
      this.isNewCompany();
    });
  }

  ngOnDestroy() {
    this.cleanupEffect?.destroy();
  }

  get companyStepControl(): AbstractControl {
    return this.store.companyStepControl;
  }

  get locationStepControl(): AbstractControl {
    return this.store.locationStepControl;
  }

  get userStepControl(): AbstractControl {
    return this.store.userStepControl;
  }

  get existingCompanyCtrl() {
    return this.store.existingCompanyCtrl;
  }

  get companyFormGroup(): FormGroup {
    return this.store.companyFormGroup;
  }

  get locationFormGroup(): FormGroup {
    return this.store.locationFormGroup;
  }

  get userFormGroup(): FormGroup {
    return this.store.userFormGroup;
  }

  get isFormValid(): boolean {
    if (this.store.isNewCompany()) {
      return (
        this.store.companyStepControl.valid &&
        this.store.locationStepControl.valid &&
        this.store.userStepControl.valid
      );
    } else {
      return (
        this.store.existingCompanyCtrl.valid &&
        this.store.locationStepControl.valid &&
        this.store.userStepControl.valid
      );
    }
  }

  onCompanyModeChange(isNew: boolean) {
    this.store.setCompanyMode(isNew);
  }

  goNext(): void {
    if (!this.stepper) return;

    const index = this.stepper.selectedIndex;
    let control: AbstractControl | null = null;

    if (index === 0) control = this.companyStepControl;
    else if (index === 1) control = this.locationStepControl;
    else if (index === 2) control = this.userStepControl;

    if (control && control.valid) {
      this.stepper.next();
    } else if (control) {
      this.markAllAsTouched(control as FormGroup);
    }
  }

  goBack(): void {
    if (!this.stepper) return;
    if (this.stepper.selectedIndex > 0) {
      this.stepper.previous();
    }
  }

  private markAllAsTouched(control: AbstractControl | null) {
    if (!control) return;

    if (control instanceof FormGroup) {
      Object.values(control.controls).forEach((c) => this.markAllAsTouched(c));
    } else {
      control.markAsTouched();
    }
  }

  onSubmitClick() {
    this.submitEvent.emit();
  }
}
