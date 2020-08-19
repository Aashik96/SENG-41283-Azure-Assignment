import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PermanentProductComponent } from './components/dashboard/permanent-product/permanent-product.component';
import { TemporaryProductComponent } from './components/dashboard/temporary-product/temporary-product.component';
import { AddPermanentProductComponent } from './components/dashboard/permanent-product/add-permanent-product/add-permanent-product.component';
import { UpdatePermanentProductComponent } from './components/dashboard/permanent-product/update-permanent-product/update-permanent-product.component';
import { ViewPermanentProductsComponent } from './components/dashboard/permanent-product/view-permanent-products/view-permanent-products.component';
import { AddTemporaryProductComponent } from './components/dashboard/temporary-product/add-temporary-product/add-temporary-product.component';
import { UpdateTemporaryProductComponent } from './components/dashboard/temporary-product/update-temporary-product/update-temporary-product.component';
import { ViewTemporaryProductsComponent } from './components/dashboard/temporary-product/view-temporary-products/view-temporary-products.component';
import { MessageComponent } from './components/dashboard/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PermanentProductComponent,
    TemporaryProductComponent,
    AddPermanentProductComponent,
    UpdatePermanentProductComponent,
    ViewPermanentProductsComponent,
    AddTemporaryProductComponent,
    UpdateTemporaryProductComponent,
    ViewTemporaryProductsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
