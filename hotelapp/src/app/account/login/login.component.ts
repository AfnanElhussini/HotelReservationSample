import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  constructor(private router: Router) {
    this.loginFormGroup = new FormGroup({
      // ssn: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(14),
      //   Validators.maxLength(14),
      //   Validators.pattern('^[0-9]*$'),
      // ]),
      email: new FormControl('', [
        Validators.required,
        // Validators.minLength(3),
        // Validators.maxLength(12),
      ]),
      password: new FormControl('', [
        Validators.required,
        // Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    try {
      if (this.loginFormGroup.valid) {
        fetch('https://localhost:7158/api/Account/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.loginFormGroup.value),
        })
          .then((res) => {
            if (res.status === 200) {
              res.json().then((data) => {
                localStorage.setItem('userBookingAppToken', data.token);
              Swal.fire({
                title: 'Login Successful',
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: 'Go to Home Page',
              }).then((result) => {
                this.router.navigate(['/']);
              });
              });
              return;
            } else if (res.status === 400) {
              return res.json().then((data) => {
                console.log(data);
                // missing fields
                if (data.errors) {
                  let errors = data.errors;
                  let errorString = '';
                  for (let key in errors) {
                    errorString += `${errors[key]} <br>`;
                  }
                  Swal.fire({
                    title: 'Login Failed',
                    html: errorString,
                    icon: 'error',
                  });
                }
                // field not valid
                else if (data[0].description) {
                  Swal.fire({
                    title: 'Login Failed',
                    text: data[0].description,
                    icon: 'error',
                  });
                } else if (data === 'Invalid Password') {
                  Swal.fire({
                    title: 'Login Failed',
                    text: 'Please enter valid email and password',
                    icon: 'error',
                  });
                }
              });
            } else {
              return;
            }
          })
          .catch((err) => {
            Swal.fire({
              title: 'Something went wrong',
              text: 'Please enter valid email and password',
              icon: 'error',
            });
          });
      } else {
        Swal.fire({
          title: 'Login Failed',
          text: 'Please enter valid email and password',
        });
      }
    } catch (err) {
      Swal.fire({
        title: 'Something went wrong',
        text: 'Please try again later',
        icon: 'error',
      });
    }
  }
}
