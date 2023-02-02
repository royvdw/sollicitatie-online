import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth/auth.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as userActions from "../../store/actions/user.actions";

@Component({
  selector: 'so-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styles: [
  ]
})
export class AccountDropdownComponent implements OnInit {
  public user$: Observable<any>;

  constructor(private store: Store<any>,
              private authService: AuthService) {
    this.user$ = this.store.select('userStore', 'user');
  }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.signOut();
  }

}
