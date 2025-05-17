import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Loginform, LoginInfo } from '../../models/login-models';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private router = inject(Router)
  private loginService = inject(LoginService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getSavedCredentials();
  }

  getSavedCredentials() {
    this.loginService.getCredentials()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.previousLoginCred.update(() => res);
        }
      )
  }

  loginForm = new FormGroup<Loginform>({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  previousLoginCred = signal({} as LoginInfo);
  errorText = '';

  controlUserName = computed(
    ()=> this.loginForm.controls.userName as FormControl<string>
  )

  controlPassword = computed(
    ()=> this.loginForm.controls.password as FormControl<string>
  )

  onClickLoginBtn() {
    if(this.loginForm.valid) {
      if(this.controlUserName().value === this.previousLoginCred().username && this.controlPassword().value === this.previousLoginCred().password){
        this.errorText = ''
        this.router.navigate(['/cattle-list'], { queryParams: {}});
      } else {
        this.errorText = 'Credentials Not Matched!'
      }
    }
  }
}
