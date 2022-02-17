import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ContainerComponent } from './shared/container/container.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
