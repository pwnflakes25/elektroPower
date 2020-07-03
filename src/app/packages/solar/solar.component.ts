import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const M;

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.scss']
})
export class SolarComponent implements OnInit, AfterViewInit {
packageClass;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    this.packageClass = '3kw';
    var instances = M.FormSelect.init(elems);

  }

}
