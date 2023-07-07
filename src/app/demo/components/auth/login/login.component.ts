import { Router } from '@angular/router';
import { AuthService } from './../../../service/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { StorageService } from 'src/app/_service/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(4)]),
        password: new FormControl('', Validators.required),
    });
    isLoggedIn = false;


    constructor(
         public layoutService: LayoutService,
         private authService: AuthService, 
         private messageService: MessageService, 
         private router: Router, 
         private storageService: StorageService) {
          }

    login() {
        const data = this.loginForm.value
        console.log(data, 'check password')
        this.authService.getData(data).subscribe(
            response => {
                this.storageService.saveUser(response)
                this.isLoggedIn = true;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Đăng nhập thành công', life: 3000 });
                this.router.navigate(['/cart'])
            },
            err => {
                console.log(err.error, 'check erro')
                this.messageService.add({ severity: 'error', summary: 'Fail', detail: err.error.message, life: 3000 });
            }
        )

    }

    get usernameControl() {
        return this.loginForm.get('username')
    }

    get passwordControl() {
        return this.loginForm.get('password')
    }
}
