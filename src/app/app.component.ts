import { Component } from '@angular/core';
import { SlideInterface } from './ImageSlider/types/SlideInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slides: SlideInterface[] = [{
    url: 'https://picsum.photos/600/300',
    title: 'Example Slide 1',
    type: 'image'
  },
  {
    url: 'https://picsum.photos/601/301',
    title: 'Example Slide 2',
    type: 'image'
  },

  {
    url: 'https://picsum.photos/602/302',
    title: 'Example Slide 3',
    type: 'image'
  },
];
  title = 'angularSlider';
}
