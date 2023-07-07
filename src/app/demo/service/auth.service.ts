import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  private isAuthenticated: boolean = false;

  login() {
    // Gọi API đăng nhập và xác thực người dùng
    // Sau khi xác thực thành công, đặt isAuthenticated thành true
    this.isAuthenticated = true;
  }

  public getData(loginRequest: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/signin', loginRequest);
  }


  public signup(signupRequest: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/signup', signupRequest);
  }
  

  public logout(): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/signout',{});
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}