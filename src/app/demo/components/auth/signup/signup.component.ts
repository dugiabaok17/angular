import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService, private messageService: MessageService, private router: Router) { }

  signup() {
    const data = this.signupForm.value
    console.log(data, 'check password')
    setTimeout(() => {
      this.authService.signup(data).subscribe(
        response => {
          console.log(response, "check response");
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Đăng ký thành công', life: 3000 });
          this.router.navigate(['/login'])

        },
        err => {
          console.log(err.error.message)
          this.messageService.add({ severity: 'error', summary: 'Fail', detail: err.error.message, life: 3000 });
        }
      )
    }, 1000);
  }

  get usernameControl() {
    return this.signupForm.get('username')
  }

  get emailControl() {
    return this.signupForm.get('email')
  }

  get passwordControl() {
    return this.signupForm.get('password')
  }
}
