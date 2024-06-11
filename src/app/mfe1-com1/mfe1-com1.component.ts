import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'SHELL/login';
import { selectAuthState } from 'SHELL/selectAuthState';

@Component({
  selector: 'app-mfe1-com1',
  templateUrl: './mfe1-com1.component.html',
  styleUrl: './mfe1-com1.component.scss',
})
export class Mfe1Com1Component {
  vm$ = this.store.select(selectAuthState);
  constructor(private store: Store) {}

  loginMfe() {
    const userName = 'anhtruonglavm2@gmail.com';
    const password = '123456';
    this.store.dispatch(login({ userName, password }));
  }
}
