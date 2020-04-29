import { AbstractControl, ValidationErrors } from '@angular/forms';

export class  PasswordValidator{
  
    static oldPasswordCheck(control:AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve,reject)=>  {
            setTimeout(()  => {
                if (control.value  !=  '12345') {
                    resolve({invalidPassword:true})
                }
                else resolve(null);
            },2000);
        })
    }


  static validateSamePassword(control: AbstractControl): ValidationErrors | null {
    console.log(control.get('newPassword'));
    if (control.get('newPassword').value != control.get('confirmPassword').value) {
        return  {passwordMisMatch: true};
    }
    return null;
  }


}