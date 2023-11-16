import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './ImageSlider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,BrowserAnimationsModule 
  ],
  exports: [ImageSliderComponent],
  declarations: [ImageSliderComponent]
})
export class ImageSliderModule { }
