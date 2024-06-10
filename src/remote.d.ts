declare module 'shell/AuthService' {
  export declare class AuthService {
    isLogin: BehaviorSubject<boolean>;
    isLogin$: import('rxjs').Observable<boolean>;
  }
}

interface Error {
  errorCode: number;
  message: string;
}

interface User {
  email: string;
  phone: string;
}

interface AuthState {
  isLogin: boolean;
  loading: boolean;
  error?: Error;
  user?: User;
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

declare module 'shell/updateIsLogin' {
  export declare const updateIsLogin: import('@ngrx/store').ActionCreator<
    '[Update login] update is login',
    (props: { isLogin: boolean }) => {
      isLogin: boolean;
    } & import('@ngrx/store/src/models').TypedAction<'[Update login] update is login'>
  >;
}

declare module 'shell/login' {
  export declare const login: import('@ngrx/store').ActionCreator<
    '[Update login] login',
    (props: { userName: string; password: string }) => {
      userName: string;
      password: string;
    } & import('@ngrx/store/src/models').TypedAction<'[Update login] login'>
  >;
}

declare module 'shell/selectAuthState' {
  export declare const selectAuthState: import('@ngrx/store').MemoizedSelector<
    object,
    AuthState,
    (s1: AuthState) => AuthState
  >;
}
