import { Component, inject } from '@angular/core';
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

import { AuthService } from '@my-product-app/frontend-data-access'; // adjust path as needed
import { tap } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-ui-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    InputFieldComponent,
    SelectFieldComponent,
    MatButtonModule,
  ],
})
export class SignupComponent {
  signupForm: FormGroup;
  private readonly authService = inject(AuthService);

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

  // FormControl getters
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
      const { username, email, password, role } = this.signupForm.value;
      // Prepare variables in the shape your GraphQL mutation expects
      const createUserInput = { username, email, password, role };
      this.authService
        .signup({ createUserInput })
        .pipe(
          tap((user) => {
            console.log('User signed up:', user);
            // maybe reset form or navigate away here
          })
        )
        .subscribe({
          error: (err) => console.error('Signup error:', err),
        });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
