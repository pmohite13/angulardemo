import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Pipe } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { AppProductListComponent } from './product/product-list.component';
import { ReplaceBySpacesPipe } from './shared/replaceBySpacesPipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule } from '@angular/router'
import { WelcomeComponent } from './home/welcome.component';
import { AppProductDetail } from './product/product-detail.component';
import { ProductDetailGuardService } from './product/product-detail-guard.service';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    AppProductListComponent,
    AppProductDetail,
    ReplaceBySpacesPipe,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'product',component: AppProductListComponent},
      {path:'pranay', component:WelcomeComponent},
      {path:'product/:id', canActivate:[ProductDetailGuardService], component:AppProductDetail},
      {path:'', redirectTo:'pranay', pathMatch:'full'}
      
    ]),
    ProductModule
  ],
  providers: [ProductDetailGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
