import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFormComponent } from '@my-product-app/frontend-ui';

@Component({
  imports: [AuthFormComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
