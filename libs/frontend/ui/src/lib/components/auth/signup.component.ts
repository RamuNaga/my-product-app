import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputFieldComponent } from '../form-controls/input-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { SelectFieldComponent } from '../form-controls/select-field.component';

@Component({
  selector: 'lib-ui-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    InputFieldComponent,
    SelectFieldComponent,
  ],
})
export class SignupComponent {
  signupForm: FormGroup;

  roles = [
    { label: 'Admin', value: 'admin' },
    { label: 'Operator', value: 'operator' },
    { label: 'Manager', value: 'manager' },
  ];

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  // Getters to cast AbstractControl to FormControl for child components
  get usernameControl(): FormControl {
    return this.signupForm.get('username') as FormControl;
  }

  get emailControl(): FormControl {
    return this.signupForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  get confirmPasswordControl(): FormControl {
    return this.signupForm.get('confirmPassword') as FormControl;
  }

  get roleControl(): FormControl {
    return this.signupForm.get('role') as FormControl;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup data:', this.signupForm.value);
      // Handle signup logic here
    }
  }
}
