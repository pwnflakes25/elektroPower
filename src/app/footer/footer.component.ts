import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToTestimonial() {
   let currentRoute = this.router.url.split('?')[0];
   if (currentRoute === '/home') {
     let testimonialElem = document.querySelector('#testimonialSection');
     testimonialElem.scrollIntoView(true);
   } else {
     this.router.navigate(['home'], { queryParams: {section: 'testimonialSection'}});
   }

  }

}
