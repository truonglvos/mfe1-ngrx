import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLogin } from 'shell/selectIsLogin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mfe1';
  vm$ = this.store.select(selectIsLogin);
  constructor(private store: Store) {}
  changeLogin(isLogin: boolean | null) {
    console.log(isLogin);
  }
}
