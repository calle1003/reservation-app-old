import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly title = signal('reservation-app-old');
}
