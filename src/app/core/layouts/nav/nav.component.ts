import { Component, computed, inject } from '@angular/core';
import { IsLoggedIn } from '../../../features/pages/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  private router = inject(Router);

  isLoggedIn = computed(
    () => IsLoggedIn()
  );

  onClickLogout() {
    IsLoggedIn.set(false);
    this.router.navigate(['']);
  }
}
