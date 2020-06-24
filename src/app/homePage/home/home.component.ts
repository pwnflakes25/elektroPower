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
    let elem = document.querySelector('.carousel');
    let instance = M.Carousel.init(elem, {indicators: true, fullWidth: true});

    setInterval(function() {
       instance.next();
      }
    , 3000);

    let elementsToShow = document.querySelectorAll('.down-on-scroll');

    this.isOnViewPortObserve();
  }


  isOnViewPortObserve() {
    const targets = document.querySelectorAll(".down-on-scroll");
    const callback = (entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-visible");
      });
    };
    const observer = new IntersectionObserver(callback, {threshold: 0.5});


      targets.forEach((target) => {
        observer.observe(target);
      });

  }


}
