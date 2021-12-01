import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';
import { BigStablishmentsPageComponent } from './big-stablishments-page/big-stablishments-page.component';
import { BigStablishmentsDetailPageComponent } from './big-stablishments-detail-page/big-stablishments-detail-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    MyEnvironmentPageComponent,
    BigStablishmentsPageComponent,
    BigStablishmentsDetailPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }