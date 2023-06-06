import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  missingFeildsErrosObject: any;
  loginFormGroup: FormGroup;
  fixedErrorToast() {
    return this.toastr.error('Registration Failed please try again');
  }
  constructor(private router: Router, private toastr: ToastrService) {
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
              this.missingFeildsErrosObject = errors;
            }
            // field not valid
            else if (data[0].description) {
              // show toast from ngx-toastr
              this.toastr.error(data[0].description, 'Login Failed');
            }
          });
        } else {
          return;
        }
      })
      .catch((err) => {
        this.toastr.error('please enter valid email or password');
      });
  }
}
