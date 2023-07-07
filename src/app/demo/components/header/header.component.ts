import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';
import { StorageService } from './../../../_service/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private storageService: StorageService, private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  logout() {
    setTimeout(() => {
      this.authService.logout().subscribe(
        () => {
          this.router.navigate(['/login'])
          this.storageService.clean();
        }
      )
    }, 600);

  }

}
