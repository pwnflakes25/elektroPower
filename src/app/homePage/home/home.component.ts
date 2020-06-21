import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
isScrolled = false;
isDesktop = true;
isVisible = true;


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
    window.addEventListener('scroll', this.onScroll);
    let elementsToShow = document.querySelectorAll('.down-on-scroll');

    this.isOnViewPortObserve();
  }


  isOnViewPortObserve() {
    const callback = (entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-visible");
      });
    };
    const observer = new IntersectionObserver(callback, {threshold: 0.25});
    const targets = document.querySelectorAll(".down-on-scroll");

      targets.forEach(function(target) {
        observer.observe(target);
      });

  }



  onScroll() {
    let header = document.getElementById('navbar');
    let position = header.offsetTop;
      if (window.pageYOffset > position) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
