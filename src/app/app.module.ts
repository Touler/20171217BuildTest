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
import {ProductService} from "./shared/product.service";
import {MultiplePipe} from './pipe/multiple.pipe';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {FilterPipe} from './pipe/filter.pipe';
import {LifeComponent} from './life/life.component';
import {TestComponent} from './test/test.component';
import { ReactiveComponent } from './test/reactive/reactive.component';

const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:productId', component: ProductDetailComponent},
  {path: 'test', component: TestComponent},
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
    HomeComponent,
    MultiplePipe,
    FilterPipe,
    LifeComponent,
    TestComponent,
    ReactiveComponent
  ], //只能 组件 指令 管道
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],//依赖模块
  providers: [ProductService],   //只能是服务
  bootstrap: [AppComponent]
})
export class AppModule {
}
