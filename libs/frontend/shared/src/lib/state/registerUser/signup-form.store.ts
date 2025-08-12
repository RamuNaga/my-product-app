import { Injectable, signal, computed } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class SignupFormStore {
  private readonly _signupForm = signal<FormGroup | null>(null);
  private readonly _companyGroup = signal<FormGroup | null>(null);
  private readonly _locationGroup = signal<FormGroup | null>(null);
  private readonly _userGroup = signal<FormGroup | null>(null);
  private readonly _existingCompanyControl = signal<FormControl | null>(null);

  // Company selection mode signal
  private readonly _isNewCompany = signal(true);
  readonly isNewCompany = computed(() => this._isNewCompany());

  // Company mode FormControl to bind to radio/toggle UI
  readonly companyModeControl = new FormControl('new'); // 'new' or 'existing'

  // Expose signals as readonly for external usage
  readonly signupForm = this._signupForm.asReadonly();
  readonly companyGroup = this._companyGroup.asReadonly();
  readonly locationGroup = this._locationGroup.asReadonly();
  readonly userGroup = this._userGroup.asReadonly();
  readonly existingCompanyControl = this._existingCompanyControl.asReadonly();

  // Initialize form and set up companyModeControl subscription
  initForm(): void {
    const company = new FormGroup({
      name: new FormControl('Greencore', Validators.required),
      type: new FormControl('', Validators.required),
      contact: new FormControl('+353 1 605 1000', Validators.required),
    });

    const location = new FormGroup({
      location: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
    });

    const user = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      role: new FormControl('STAFF', Validators.required),
    });

    const existingCompany = new FormControl(null, Validators.required);

    const form = new FormGroup({
      company,
      location,
      user,
      existingCompany,
    });

    this._companyGroup.set(company);
    this._locationGroup.set(location);
    this._userGroup.set(user);
    this._existingCompanyControl.set(existingCompany);
    this._signupForm.set(form);

    // Subscribe to changes on companyModeControl (radio/toggle UI)
    this.companyModeControl.valueChanges.subscribe((val: string | null) => {
      if (val === 'new' || val === 'existing') {
        this._isNewCompany.set(val === 'new');
        this.updateValidators();
      }
    });

    // Initialize validators based on default mode
    this.updateValidators();
  }

  setCompanyMode(isNew: boolean): void {
    this._isNewCompany.set(isNew);
    this.companyModeControl.setValue(isNew ? 'new' : 'existing', {
      emitEvent: false,
    });
    this.updateValidators();
  }

  private updateValidators(): void {
    const company = this.companyGroup();
    const existing = this.existingCompanyControl();

    if (!company || !existing) return;

    if (this.isNewCompany()) {
      // New company: company group required, existing company control not required
      Object.values(company.controls).forEach((ctrl) =>
        ctrl.setValidators(Validators.required)
      );
      existing.clearValidators();
      existing.setValue(null);
    } else {
      // Existing company: company group controls not required, existing company control required
      Object.values(company.controls).forEach((ctrl) => ctrl.clearValidators());
      existing.setValidators(Validators.required);
    }

    // Update validation state
    Object.values(company.controls).forEach((ctrl) =>
      ctrl.updateValueAndValidity()
    );
    existing.updateValueAndValidity();
  }

  // Stepper helpers
  get companyStepControl(): AbstractControl {
    return this.isNewCompany()
      ? this.companyGroup() ?? new FormGroup({})
      : this.existingCompanyControl() ?? new FormControl('');
  }

  get locationStepControl(): AbstractControl {
    return this.locationGroup() ?? new FormGroup({});
  }

  get userStepControl(): AbstractControl {
    return this.userGroup() ?? new FormGroup({});
  }

  get existingCompanyCtrl(): FormControl {
    return (this.existingCompanyControl() as FormControl) ?? new FormControl();
  }

  get companyFormGroup(): FormGroup {
    return this.companyGroup() ?? new FormGroup({});
  }

  get locationFormGroup(): FormGroup {
    return this.locationGroup() ?? new FormGroup({});
  }

  get userFormGroup(): FormGroup {
    return this.userGroup() ?? new FormGroup({});
  }
}
