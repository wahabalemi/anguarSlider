import { Component, Input, OnInit } from '@angular/core';
import { SlideInterface } from '../ImageSlider/types/SlideInterface'
@Component({
  selector: 'image-slider',
  templateUrl: './ImageSlider.component.html',
  styleUrls: ['./ImageSlider.component.css']
})
export class ImageSliderComponent {
  @Input() slides: SlideInterface[] = [];
  @Input() lang?: string = "1";
  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
    this.resetTimer();

    this.currentIndex = newIndex;
  }

  goToNext(): void {

    const isLastSlide = this.currentIndex === this.slides.length - 1;

    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();

    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideType() {
    if (this.slides.length > 0) {
      return `${this.slides[this.currentIndex].type}`;
    }

    return "image";
  }

  getCurrentSlideUrl() {

    if (this.slides.length > 0) {

      return `${this.slides[this.currentIndex].url}`;
    }

    return "#";
  }

}
