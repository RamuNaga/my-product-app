import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AuthFormComponent,
  ProductFormComponent,
} from '@my-product-app/frontend-ui';
import { environment } from '../environments/environments';

@Component({
  imports: [AuthFormComponent, ProductFormComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  uploadBaseUrl = environment.apiUrl;
}
