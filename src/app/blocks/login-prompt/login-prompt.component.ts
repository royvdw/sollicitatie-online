import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../_services/auth/auth.service";
import {Store} from "@ngrx/store";
import * as fromUserActions from '../../store/actions/user.actions'

@Component({
  selector: 'so-login-prompt',
  templateUrl: './login-prompt.component.html',
  styles: [
  ]
})

export class LoginPromptComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup<any>({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  public createAccountForm: FormGroup = new FormGroup<any>({
    email: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required]})
  })

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  loginAction() {
    this.store.dispatch(fromUserActions.userLogin({
      email: this.loginForm.get('email')!.value,
      password: this.loginForm.get('password')!.value
    }));
  }

  createAccountAction() {
    this.authService.createAccount(
      this.createAccountForm.get('email')!.value,
      this.createAccountForm.get('password')!.value
    );
  }

}
