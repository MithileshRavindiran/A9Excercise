import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './passwor.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm;

  constructor(private fb:  FormBuilder) {
    this.changePasswordForm = fb.group({
      oldPassword:['', [Validators.required], [PasswordValidator.oldPasswordCheck]],
      newPassword:['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      confirmPassword:['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
   },{
     validator:PasswordValidator.validateSamePassword
    })
  }

  ngOnInit(): void {
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }


  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword')
  }

  formSubmit() {
    console.log(this.changePasswordForm);
  }

  oldPasswordChange(oldPassword)  {
    console.log(oldPassword);
  }

}
