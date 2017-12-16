import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [  //只能 组件 指令 管道
    AppComponent
  ],
  imports: [  //依赖模块
    BrowserModule
  ],
  providers: [],   //只能是服务
  bootstrap: [AppComponent]
})
export class AppModule { }
