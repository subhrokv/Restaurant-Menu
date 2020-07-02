import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<-- NdModel Lives here}
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    
    DishesComponent,
    
    DishDetailComponent,
    
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
