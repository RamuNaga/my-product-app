import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from '@my-product-app/ui';

@Component({
  imports: [SignupComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
