import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { LayoutService } from './layout.service';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule
  ],
  declarations: [LayoutComponent, HomeComponent, HeaderComponent, FooterComponent, ProductsComponent, DetailsComponent, DetailsComponent],
  providers: [LayoutService]
})
export class LayoutModule { }
