import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './ImageSlider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ImageSliderComponent],
  declarations: [ImageSliderComponent]
})
export class ImageSliderModule { }
