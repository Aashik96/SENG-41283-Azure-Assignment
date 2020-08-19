import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PermanentProductComponent } from './components/dashboard/permanent-product/permanent-product.component';
import { AddPermanentProductComponent } from './components/dashboard/permanent-product/add-permanent-product/add-permanent-product.component';
import { ViewPermanentProductsComponent } from './components/dashboard/permanent-product/view-permanent-products/view-permanent-products.component';
import { UpdatePermanentProductComponent } from './components/dashboard/permanent-product/update-permanent-product/update-permanent-product.component';
import { TemporaryProductComponent } from './components/dashboard/temporary-product/temporary-product.component';
import { ViewTemporaryProductsComponent } from './components/dashboard/temporary-product/view-temporary-products/view-temporary-products.component';
import { AddTemporaryProductComponent } from './components/dashboard/temporary-product/add-temporary-product/add-temporary-product.component';
import { UpdateTemporaryProductComponent } from './components/dashboard/temporary-product/update-temporary-product/update-temporary-product.component';
import { MessageComponent } from './components/dashboard/message/message.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,
   children : [
     {path:'permanent-products',component:PermanentProductComponent,
      children : [
        {path:'add',component:AddPermanentProductComponent},
        {path:'view',component:ViewPermanentProductsComponent},
        {path:'update/:id',component:UpdatePermanentProductComponent}
      ]
      },
      {path:'temporary-products',component:TemporaryProductComponent,
      children : [
        {path:'add',component:AddTemporaryProductComponent},
        {path:'view',component:ViewTemporaryProductsComponent},
        {path:'update/:id',component:UpdateTemporaryProductComponent}
      ]
      },
      {path:'messages',component:MessageComponent}
      
   ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
