import { AuthService } from './../../service/auth.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { LayoutService } from './../../../layout/service/app.layout.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../api/products';
import { ColorService } from '../../service/color.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public productList : any ;
  content?: string;
  constructor(
    public layoutService: LayoutService, 
    public router: Router, 
    private productService: ProductsService,
    private authService:AuthService,
    private colorService: ColorService,) { }
  ngOnInit(): void {
    // console.log('check session', jsonObject.roles)

    this.productService.getProduct()
    .subscribe(res=>{
      this.productList = res;
      console.log(this.productList)
    });
  }

  addToCart() {
    if (this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/cart']);
    } else {
      this.router.navigate(['/login'])
    }
  }
  
}
