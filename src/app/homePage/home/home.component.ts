import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
declare const M;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
isDesktop = true;
isVisible = false;
carouselInstance: any;
sectionId: string;


  constructor(private elRef: ElementRef, private breakpointObserver: BreakpointObserver, private route: ActivatedRoute) {

      breakpointObserver.observe([
       Breakpoints.WebLandscape,
       Breakpoints.WebPortrait
      ]).subscribe(result => {
       if (result.matches) {
         this.isDesktop = true;
       } else {
         this.isDesktop = false;
       }
      });
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
     this.sectionId = queryParams['section'];
   });
  }

  ngAfterViewInit(): void {
    let carouselElem = document.querySelector('.carousel');
    this.carouselInstance = M.Carousel.init(carouselElem, {indicators: true, fullWidth: true});

    //
    setInterval(() => {
       this.carouselInstance.next();
      }
    , 5000);

    let elementsToShow = document.querySelectorAll('.down-on-scroll');

    this.isOnViewPortObserve();
    //below to scroll to a section;
    this.scrollIntoElement();
  }

  nextCarousel() {
   this.carouselInstance.next();
  }

  prevCarousel() {
    this.carouselInstance.prev();
  }


  isOnViewPortObserve() {
    const targets = document.querySelectorAll(".down-on-scroll");

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
        else {
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {threshold: 0.5});


      targets.forEach((target) => {
        observer.observe(target);
      });

  }

  scrollIntoElement() {
    if (this.sectionId) {
      let elem = document.getElementById(this.sectionId);
      const yOffset = -80;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }


}
