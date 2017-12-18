import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductComponent} from './product/product.component';
import {StarsComponent} from './stars/stars.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from "@angular/router";

const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:prodTitle', component: ProductDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent
  ], //只能 组件 指令 管道
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],//依赖模块
  providers: [],   //只能是服务
  bootstrap: [AppComponent]
})
export class AppModule {
}
