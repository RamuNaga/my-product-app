import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginStore, MaterialModule } from '@my-product-app/frontend-shared';
import { InputFieldComponent } from '../form-controls/input-field.component';

@Component({
  selector: 'lib-ui-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    InputFieldComponent,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  readonly loginStore = inject(LoginStore);
  private fb = inject(FormBuilder);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginStore.login(email, password);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
