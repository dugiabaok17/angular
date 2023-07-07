import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        AvatarModule
    ],
    declarations: []
})
export class HomeModule { }
