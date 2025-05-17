import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInfo } from '../../../models/login-models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getCredentials(): Observable<LoginInfo> {
    const url = 'http://localhost:3000/loginCred';

    return this.http.get<LoginInfo>(url);
  }
}
