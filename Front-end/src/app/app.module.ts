import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {DataService} from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
