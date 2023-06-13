import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from 'src/app/Services/reset-password.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  constructor(
    private toastr: ToastrService,
    private resetPasswordService: ResetPasswordService
  ) {
    this.resetPasswordForm = new FormGroup({
      
      Token: new FormControl('', {
      
        validators: [Validators.required],
      }),
      Email: new FormControl('', {
        

        validators: [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      }),
      Password: new FormControl('', {
     
        validators: [Validators.required],
      }),
      ConfirmedPassword: new FormControl('', {
  
        validators: [Validators.required],
      }),
    });
  }

  resetPassword = () => {
    const data = {
      Token: this.resetPasswordForm.value.Token,
      Email: this.resetPasswordForm.value.Email,
      Password: this.resetPasswordForm.value.Password,
      ConfirmedPassword: this.resetPasswordForm.value.ConfirmedPassword,
    };
    console.log(data);
    this.resetPasswordService.resetPassword(
      data.Token,
      data.Email,
      data.Password,
      data.ConfirmedPassword
    ).subscribe((res) => {
      debugger;
      console.log(res);
    });
  };
}
