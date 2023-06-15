import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  // base_url = 'https://localhost:7158/api/Account/ResetPassword';
  headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
  constructor(private http: HttpClient) {}

  resetPassword(token: string, email: string, password: string): Observable<any> {
    const url = 'https://localhost:7158/api/Account/ResetPassword';

    const formData = new FormData();
    formData.append('Token', token);
    formData.append('Email', email);
    formData.append('Password', password);
    formData.append('ConfirmedPassword', password);
    console.log(formData.get('Email'));
    return this.http.post(url, formData , { headers: this.headers });
  }
}
