import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CartComponent } from '../cart/cart.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HomeComponent },
        {
         path:'cart',component: CartComponent
        },
        {
            path:'login',component:LoginComponent
        },
        {
            path:'signup', component: SignupComponent
        }
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
