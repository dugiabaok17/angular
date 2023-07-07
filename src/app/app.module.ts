import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ColorComponent } from './demo/components/pages/management/color/color.component';
import { TableModule } from 'primeng/table';
import { ColorService } from './demo/service/color.service';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { CartComponent } from './demo/components/cart/cart.component';
import { HeaderComponent } from './demo/components/header/header.component';
import { FooterComponent } from './demo/components/footer/footer.component';
import { HomeComponent } from './demo/components/home/home.component';
import { AuthService } from './demo/service/auth.service';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
@NgModule({
    declarations: [
    AppComponent, NotfoundComponent,ColorComponent, CartComponent, HeaderComponent,FooterComponent,HomeComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        TableModule,
        FileUploadModule,
        ToolbarModule,
        DialogModule,
        DropdownModule,
        CommonModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,ColorService,MessageService,AuthService,
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
