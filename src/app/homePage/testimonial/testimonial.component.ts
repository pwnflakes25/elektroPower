import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const M;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit, AfterViewInit {

testimonials = [
  {
    name: 'Mr Firghi',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg'
  },
  {
    name: 'Mr Rabi',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/39.jpg'
  },
  {
    name: 'Ms Celine',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {padding: 5, shift: 10});
  }



  trackByFn(index, item) {
   return index;
  }

}
