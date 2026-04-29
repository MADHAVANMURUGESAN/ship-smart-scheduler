import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginDto, RegisterDto } from '../models/auth.models';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl = `${environment.apiUrl}/api/Auth`;

  constructor(private http: HttpClient) {}

  login(data: LoginDto) {
    return this.http.post<any>(`${this.baseUrl}/login`, data)
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
        })
      );
  }

  register(data: RegisterDto) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}