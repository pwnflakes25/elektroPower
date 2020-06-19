import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

testimonials = [
  {
    name: 'Mr Jojo',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg'
  },
  {
    name: 'Mr Rabi',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg'
  },
  {
    name: 'Ms Celine',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg'
  }
];

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
    $('.carousel').carousel();
   });
  }

  trackByFn(index, item) {
   return index;
  }

}
