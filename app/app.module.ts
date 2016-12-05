import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleService } from './example.service';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ExampleService]
})
export class AppModule { }
