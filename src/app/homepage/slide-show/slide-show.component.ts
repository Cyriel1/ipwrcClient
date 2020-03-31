import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showSlides(){
    let currentSlide = 0;
    let slides = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>;
    for(let index:number; index < slides.length; index++){
      slides[index].style.display = 'none';
    }
    slides[currentSlide].style.display = "block";

  }

}
