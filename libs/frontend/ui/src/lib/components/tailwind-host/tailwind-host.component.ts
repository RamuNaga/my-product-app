import { Component } from '@angular/core';

@Component({
  selector: 'lib-tailwind-host',
  host: { 'data-unique-id': 'tailwind-host-1' },
  templateUrl: './tailwind-host.component.html',
  styleUrls: ['./tailwind-host.component.scss'],
})
export class TailwindHostComponent {}
