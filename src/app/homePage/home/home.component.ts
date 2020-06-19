import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {


  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }


}
