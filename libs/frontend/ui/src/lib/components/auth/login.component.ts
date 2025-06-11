import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputFieldComponent } from '../form-controls/input-field.component';
import { AuthService } from '@my-product-app/frontend-data-access';
import { tap } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-ui-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InputFieldComponent,
    MatButtonModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  private readonly authService = inject(AuthService);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Prepare variables in the shape your GraphQL mutation expects
      const loginInput = { email, password };
      this.authService
        .login({ loginInput })
        .pipe(
          tap((result) => {
            console.log('Login success:', result);
            // Navigate or handle success here
          })
        )
        .subscribe({
          error: (err) => console.error('Login error:', err),
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
