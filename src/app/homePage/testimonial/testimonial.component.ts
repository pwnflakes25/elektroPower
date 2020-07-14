import { Component, OnInit, AfterViewInit } from '@angular/core';
import {testimonialArr} from './testimonialList';
declare const M;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit, AfterViewInit {

testimonials = [...testimonialArr];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems);
  }



  trackByFn(index, item) {
   return index;
  }

}
