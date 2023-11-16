import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageSliderModule } from './ImageSlider/ImageSlider.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
