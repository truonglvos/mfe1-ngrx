declare module 'shell/AuthService' {
  export declare class AuthService {
    isLogin: BehaviorSubject<boolean>;
    isLogin$: import('rxjs').Observable<boolean>;
  }
}

interface AuthState {
  isLogin: boolean;
}

declare module 'shell/selectIsLogin' {
  export declare const selectIsLogin: import('@ngrx/store').MemoizedSelector<
    object,
    boolean,
    (s1: AuthState) => boolean
  >;
}

declare module 'shell/updateIsLogin' {
  export declare const updateIsLogin: import('@ngrx/store').ActionCreator<
    '[Update login] update is login',
    (props: { isLogin: boolean }) => {
      isLogin: boolean;
    } & import('@ngrx/store/src/models').TypedAction<'[Update login] update is login'>
  >;
}
