import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleExampleComponent } from './simple-example/simple-example.component';
import { InputOutputExampleComponent } from './input-output-example/input-output-example.component';

@NgModule({
  declarations: [AppComponent, SimpleExampleComponent, InputOutputExampleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
