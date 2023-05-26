import { Component, OnInit, createPlatform } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User } from 'src/app/Models/user';

import { ConfirmedValidator } from 'src/app/shared/customHooks/confirmed.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;

  userRegisterForm: FormGroup;

  checkMatchigPasswords() {
    return (
      this.userRegisterForm.value['password'] ===
      this.userRegisterForm.value['confirmPassword']
    );
  }

  olderThan18 = true;

  checkBrithDate() {
    let year = new Date().getFullYear(); //2023
    let userYear = new Date(
      this.userRegisterForm.value['birthDate']
    ).getFullYear(); //2000
    let age = year - userYear;
    if (age >= 18) {
      this.olderThan18 = true;
    }else{
      this.olderThan18 = false;
    }
    return this.olderThan18;

    console.log(age, this.olderThan18, year, userYear);
  }
  constructor() {

    this.userRegisterForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(70),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      userID: new FormControl('', [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern('^[0-9]*$'),
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),

      mobileNo: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),

      address: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(70),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),

      birthDate: new FormControl('', [Validators.required ]),

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
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  onSubmit() {
    console.log(this.userRegisterForm.valid);
    console.log(this.userRegisterForm.invalid);
    console.log(this.checkMatchigPasswords());
    if (
      this.userRegisterForm.valid &&
      this.checkMatchigPasswords() &&
      this.checkBrithDate()
    ) {
      alert('Registration Successful');
    } else {
      return
    }
  }
  ngOnInit(): void {}
}
