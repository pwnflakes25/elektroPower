import { Component, OnInit, AfterViewInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {



  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function(){
    $('.sidenav').sidenav();
   });
  }

}
