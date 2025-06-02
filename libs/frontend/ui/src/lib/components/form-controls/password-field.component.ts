import { Component, Input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class PasswordFieldComponent {
  @Input() label = 'Password';
  @Input() placeholder = 'Enter your password';
  @Input() required = false;
  @Input() control: FormControl = new FormControl('');

  // Signal to toggle visibility
  private show = signal(false);
  get showPassword(): boolean {
    return this.show();
  }

  toggleVisibility(): void {
    this.show.set(!this.show());
  }
}
