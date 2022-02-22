import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LieuComponentComponent } from './lieu-component/lieu-component.component';
import { LikeLieuComponent } from './like-lieu/like-lieu.component';
import { RecommandeLieuComponent } from './recommande-lieu/recommande-lieu.component';

@NgModule({
  declarations: [
    AppComponent,
    LieuComponentComponent,
    LikeLieuComponent,
    RecommandeLieuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
