import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { TailwindHostComponent } from '../tailwind-host/tailwind-host.component';

@Component({
  selector: 'lib-auth-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    SignupComponent,
    LoginComponent,
    TailwindHostComponent,
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  selectedTabIndex = 0;

  switchToSignup() {
    this.selectedTabIndex = 1;
  }

  switchToLogin() {
    this.selectedTabIndex = 0;
  }
}
