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
    imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg',
    position: 'Business Analyst'
  },
  {
    name: 'Mr Rabi',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/39.jpg',
    position: 'Product Manager'
  },
  {
    name: 'Ms Celine',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg',
    position: 'HR Manager'
  }
];

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
