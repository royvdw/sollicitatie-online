import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromUserActions from "../../store/actions/user.actions";

@Component({
  selector: 'so-default-header',
  templateUrl: './default-header.component.html',
  styles: [
  ]
})
export class DefaultHeaderComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(fromUserActions.userCheckLoggedIn());
  }

}
