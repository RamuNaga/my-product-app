import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '@my-product-app/frontend-shared';
import { SidenavComponent } from './sidenav.component';
import { HeaderComponent } from './header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [
    CommonModule,
    MaterialModule,
    SidenavComponent,
    HeaderComponent,
    RouterOutlet,
  ],
  selector: 'lib-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {}
