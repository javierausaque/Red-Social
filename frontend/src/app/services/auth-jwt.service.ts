import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { from, Observable } from 'rxjs';
import { JwtToken, User } from "../utils/interfaces";



@Injectable({ providedIn: 'root' })
export class AuthJtwTokenService<I>  {

public user : User

  /**
   * Creates an instance of user service.
   * @param serviwRest 
   * @param serviwGrowl 
   */
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.user = {} as User
  }

  /** API */
  get api() { return "http://localhost:3000" }

  get loginEndPoit() { return "/auth/login" }

  get userAuth(){ return this.user}

  /**
   * Redirects login
   */
  public redirectLogin() {
    this.router.navigateByUrl("/");
  }

  /**
   * Logins user service
   * @param username 
   * @param password 
   * @returns  
   */
  login(data: I): Promise<JwtToken> | void {
    const observable: Observable<JwtToken> = from(this.http.post<JwtToken>(`${this.api}${this.loginEndPoit}`, data));
    return <Promise<JwtToken>>this.loadToken(observable, true);
  }

  loadToken(promise: Observable<JwtToken>, valid: boolean): Promise<JwtToken> | void {
     promise.subscribe((res) => {
      const { token } = res;
      this.user = res.user 
      window.localStorage.setItem("TOKEN_APP", token)
    }, err => {
      console.log(err);
    })
  }

  isExpiredAuth() {
    window.localStorage
    const tokenLocalStore = window.localStorage.getItem("TOKEN_APP");
    console.log("toen", tokenLocalStore);
    
    if (!tokenLocalStore) {
      this.router.navigateByUrl("login")
      return false;
    }
    else
      return true
  }

  logout() {
    window.localStorage.removeItem("TOKEN_APP")
    this.router.navigateByUrl("login")
    return true;
  }
}