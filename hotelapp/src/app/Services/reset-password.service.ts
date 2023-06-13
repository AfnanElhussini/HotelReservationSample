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
  base_url = 'https://localhost:7158/api/Account/ResetPassword';
  constructor(private http: HttpClient) {}

  public resetPassword(
    token: string,
    email: string,
    password: string,
    confirmPassowrd: string
  ): Observable<any> {
    const data = {
      token,
      email,
      password,
      confirmPassowrd,
    };

    return this.http
      .post<any>(this.base_url, data)

      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400) {
            // Handle the 404 response here
            console.log('Not found');
          } else {
            // Handle other error responses
            console.error(error);
          }
          return throwError('Something went wrong');
        })
      );
    console.log(data);
  }
}
