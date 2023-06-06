import { Router } from '@angular/router';
import { Component, OnInit, createPlatform } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User } from 'src/app/Models/user';
import { ToastrService } from 'ngx-toastr';
import { ConfirmedValidator } from 'src/app/shared/customHooks/confirmed.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  missingFeildsErrosObject: any;
  userRegisterForm: FormGroup;
  fixedErrorToast(){
    return this.toastr.error('Registration Failed please try again' );
  }
  registerUserFunc(data: object) {
    console.log(data);
    fetch('https://localhost:7158/api/Account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          alert('Registration Successful');
        } else if (res.status === 400) {
          console.log(res);
        } else {
          console.warn('Registration Failed: ' + res.status);
        }
      })
      .catch((err) => {
        console.warn('Registration Failed: ' + err);
      });
  }
  // checkMatchigPasswords() {
  //   return (
  //     this.userRegisterForm.value['password'] ===
  //     this.userRegisterForm.value['confirmPassword']
  //   );
  // }

  // olderThan18 = true;

  // checkBrithDate() {
  //   let year = new Date().getFullYear(); //2023
  //   let userYear = new Date(
  //     this.userRegisterForm.value['birthDate']
  //   ).getFullYear(); //2000
  //   let age = year - userYear;
  //   if (age >= 18) {
  //     this.olderThan18 = true;
  //   }else{
  //     this.olderThan18 = false;
  //   }
  //   return this.olderThan18;

  //   console.log(age, this.olderThan18, year, userYear);
  // }
  constructor(private router: Router , private toastr: ToastrService) {
     
  

    this.userRegisterForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        // Validators.minLength(10),
        // Validators.maxLength(70),
        // Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        // Validators.minLength(10),
        // Validators.maxLength(70),
        // Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      userName: new FormControl('', [
        Validators.required,
        // Validators.minLength(10),
        // Validators.maxLength(70),
        // Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      // userID: new FormControl('', [
      //   Validators.required,
      //   // Validators.minLength(14),
      //   // Validators.maxLength(14),
      //   // Validators.pattern('^[0-9]*$'),
      // ]),

      email: new FormControl('', [Validators.required, Validators.email]),

      // mobileNo: new FormControl('', [
      //   Validators.required,
      //   Validators.pattern('^[0-9]*$'),
      //   Validators.minLength(10),
      //   Validators.maxLength(10),
      // ]),

      // address: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(10),
      //   Validators.maxLength(70),
      //   Validators.pattern('^[a-zA-Z ]*$'),
      // ]),

      // birthDate: new FormControl('', [Validators.required]),

      //     const hasNumber = /\d/.test(value);
      //     const hasUpper = /[A-Z]/.test(value);
      //     const hasLower = /[a-z]/.test(value);
      //     const hasSpecial = /[!@#$%^&*()]/.test(value);
      //     const valid = hasNumber && hasUpper && hasLower && hasSpecial;

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
        ),
      ]),
      // confirmPassword: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(8),
      // ]),
    });
  }
  onSubmit() {
    try {
      fetch('https://localhost:7158/api/Account/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.userRegisterForm.value),
      })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: 'Registration Successful',
              icon: 'success',
              showCancelButton: false,
              confirmButtonText: 'Login',
            }).then((result) => {
              this.router.navigate(['/login']);
            });

            return;
          } else if (res.status === 400) {
            return res.json().then((data) => {
              // missing fields
              if (data.errors) {
                let errors = data.errors;     
                this.missingFeildsErrosObject = errors;
              }
              // field not valid
              else if (data[0].description) {
                // show toast from ngx-toastr
                this.toastr.error(data[0].description, 'Registration Failed');

              } else {
                this.fixedErrorToast()
              }
            });
          } else {
            throw new Error('Registration Failed');
          }
        })
        .catch((err) => {
          this.fixedErrorToast()
        });
    } catch (err) {
      this.fixedErrorToast()
    }
  }

  ngOnInit(): void {}
}
