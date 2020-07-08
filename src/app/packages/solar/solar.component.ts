import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const M;

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.scss']
})
export class SolarComponent implements OnInit, AfterViewInit {
selected = '3kw';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
