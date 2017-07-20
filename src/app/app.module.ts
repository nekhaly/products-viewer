import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent
  ],
  imports: [
    NgbModule, BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
