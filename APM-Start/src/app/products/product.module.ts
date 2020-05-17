import { NgModule } from '@angular/core';

import { ProductlistComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConverttoSpacesPipe } from '../shared/covert-to-spaces.pipe';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({

  imports: [

    RouterModule.forChild([
      {path : 'products', component: ProductlistComponent},
      {path: 'products/:id',
      canActivate: [ProductDetailGuard],
      component:ProductDetailComponent
    },

    ]),
    SharedModule,

  ],
  declarations: [
    ProductlistComponent,
    ProductDetailComponent,
    ConverttoSpacesPipe


  ]
})
export class ProductModule { }
