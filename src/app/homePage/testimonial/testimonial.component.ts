import { Component, OnInit, AfterViewInit } from '@angular/core';
import {testimonialArr} from './testimonialList';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
declare const M;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit, AfterViewInit {
isDesktop;
testimonials = [...testimonialArr];

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
     Breakpoints.HandsetLandscape,
     Breakpoints.HandsetPortrait
    ]).subscribe(result => {
     if (result.matches) {
       this.isDesktop = false;
     } else {
       this.isDesktop = true;
     }
    });
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {numVisible: (this.isDesktop ? 5 : 3)});
  }

  trackByFn(index, item) {
   return index;
  }

}
