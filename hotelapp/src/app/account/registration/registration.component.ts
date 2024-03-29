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
import { RegisterService } from 'src/app/Services/register.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  missingFeildsErrosObject: any;
  userRegisterForm: FormGroup;
  fixedErrorToast() {
    return this.toastr.error('Registration Failed please try again');
  }
  // registerUserFunc(data: object) {
  //   console.log(data);
  //   fetch('https://localhost:7158/api/Account/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         alert('Registration Successful');
  //       } else if (res.status === 400) {
  //         console.log(res);
  //       } else {
  //         console.warn('Registration Failed: ' + res.status);
  //       }
  //     })
  //     .catch((err) => {
  //       console.warn('Registration Failed: ' + err);
  //     });
  // }
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
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private registerService: RegisterService
  ) {
    this.userRegisterForm = new FormGroup({
      firstName: new FormControl('', {
        updateOn: 'submit',
        validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      }),

      lastName: new FormControl('', {
        updateOn: 'submit',
        validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      }),

      userName: new FormControl('', {
        updateOn: 'submit',
        validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      }),
      // userID: new FormControl('', [
      //   Validators.required,
      //   // Validators.minLength(14),
      //   // Validators.maxLength(14),
      //   // Validators.pattern('^[0-9]*$'),
      // ]),

      email: new FormControl('', {
        updateOn: 'submit',
        validators: [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      }),

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
        // Validators.required,
        // Validators.minLength(8),
        // Validators.pattern(
        //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
        // ),
      ]),
      // confirmPassword: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(8),
      // ]),
    });
  }

  firstNameFEValidation = false;
  lastNameFEValidation = false;
  emailFEValidation = false;
  userNameFEValidation = false;

  ValidationFE() {
    if (this.userRegisterForm.controls['firstName'].invalid) {
      this.firstNameFEValidation = true;
    } else {
      this.firstNameFEValidation = false;
    }
    if (this.userRegisterForm.controls['lastName'].invalid) {
      this.lastNameFEValidation = true;
    } else {
      this.lastNameFEValidation = false;
    }
    if (this.userRegisterForm.controls['email'].invalid) {
      this.emailFEValidation = true;
    } else {
      this.emailFEValidation = false;
    }
    if (this.userRegisterForm.controls['userName'].invalid) {
      this.userNameFEValidation = true;
    } else {
      this.userNameFEValidation = false;
    }
  }

  // onSubmit() {
  //   if (this.userRegisterForm.invalid) {
  //     // alert('Please fill all the required fields');ValidationFE()
  //     this.ValidationFE();
  //     // return this.userRegisterForm.controls['email'].errors
  //   } else {
  //     try {
  //       this.firstNameFEValidation = false;
  //       this.lastNameFEValidation = false;
  //       this.emailFEValidation = false;
  //       this.userNameFEValidation = false;
  //       debugger;
  //       this.registerService
  //         .register(
  //           this.userRegisterForm.value['email'],
  //           this.userRegisterForm.value['firstName'],
  //           this.userRegisterForm.value['userName'],
  //           this.userRegisterForm.value['lastName'],
  //           this.userRegisterForm.value['password']
  //         )
  //         .subscribe((res) => {
  //           this.toastr.success('Registration Successful', 'Success');
  //           this.toastr.info('Please confirm your email', 'Info');
  //           setTimeout(() => {
  //             this.router.navigate(['/confirm-email']);
  //           }, 2000);

  //           if (res.status === 400) {
  //             return res.json().then((data: any) => {
  //               // missing fields
  //               if (data.errors) {
  //                 let errors = data.errors;
  //                 this.missingFeildsErrosObject = errors;
  //               }
  //               // field not valid
  //               else if (data[0].description) {
  //                 // show toast from ngx-toastr
  //                 this.toastr.error(data[0].description, 'Registration Failed');
  //               } else {
  //                 this.fixedErrorToast();
  //               }
  //             });
  //           }
  //           return;
  //         });
  //     } catch (err) {
  //       this.fixedErrorToast();
  //     }
  //     return;
  //   }
  // }
  onSubmit() {
    if (this.userRegisterForm.invalid) {
      this.ValidationFE();
    } else {
  
        this.firstNameFEValidation = false;
        this.lastNameFEValidation = false;
        this.emailFEValidation = false;
        this.userNameFEValidation = false;
        this.registerService
          .register(
            this.userRegisterForm.value['email'],
            this.userRegisterForm.value['firstName'],
            this.userRegisterForm.value['userName'],
            this.userRegisterForm.value['lastName'],
            this.userRegisterForm.value['password']
          )
          .subscribe((res) => {
            console.log(res);
            
            this.toastr.success('Registration Successful', 'Success');
            this.toastr.info('Please confirm your email', 'Info');
            setTimeout(() => {
              this.router.navigate(['/confirm-email']);
            }, 2000);
          
          });
      
    }
  }

  ngOnInit(): void {}
}
// fetch('https://localhost:7158/api/Account/register', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(this.userRegisterForm.value),
// })
//   .then((res) => {
//     if (res.status === 200) {
//       // show toast from ngx-toastr
//       this.toastr.success('Registration Successful', 'Success');
//       this.router.navigate(['/login']);

//       return;
//     } else if (res.status === 400) {
//       return res.json().then((data) => {
//         // missing fields
//         if (data.errors) {
//           let errors = data.errors;
//           this.missingFeildsErrosObject = errors;
//         }
//         // field not valid
//         else if (data[0].description) {
//           // show toast from ngx-toastr
//           this.toastr.error(data[0].description, 'Registration Failed',{

//           });
//         } else {
//           this.fixedErrorToast();
//         }
//       });
//     } else {
//       throw new Error('Registration Failed');
//     }
//   })
//   .catch((err) => {
//     this.fixedErrorToast();
//   });
