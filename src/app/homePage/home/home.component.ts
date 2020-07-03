import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
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
actionButtonInstance: any;


  constructor(private elRef: ElementRef, private breakpointObserver: BreakpointObserver) {

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
    let carouselElem = document.querySelector('.carousel');
    let actionButtonElems = document.querySelectorAll('.fixed-action-btn');
    this.carouselInstance = M.Carousel.init(carouselElem, {indicators: true, fullWidth: true});
    this.actionButtonInstance = M.FloatingActionButton.init(actionButtonElems);
    //
    setInterval(() => {
       this.carouselInstance.next();
      }
    , 5000);

    let elementsToShow = document.querySelectorAll('.down-on-scroll');

    this.isOnViewPortObserve();
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


}
