import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'shell/AuthService';
import { selectIsLogin } from 'shell/selectIsLogin';
import { updateIsLogin } from 'shell/updateIsLogin';

@Component({
  selector: 'app-mfe1-com1',
  templateUrl: './mfe1-com1.component.html',
  styleUrl: './mfe1-com1.component.scss',
})
export class Mfe1Com1Component {
  vm$ = this.store.select(selectIsLogin);
  constructor(private authService: AuthService, private store: Store) {
    this.authService.isLogin$.subscribe((v) => console.log('@@@mfe', v));
  }

  changeLogin(isLogin: boolean | null) {
    console.log(isLogin);
    this.store.dispatch(updateIsLogin({ isLogin: !isLogin }));
  }
}
