import { Component, OnInit, AfterViewInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
declare const M;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {



  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.sidenav');
    const dropDown = document.querySelectorAll('.dropdown-trigger');

    const sideNavInstance = M.Sidenav.init(elems);
    const dropDownInstance = M.Dropdown.init(dropDown, {coverTrigger: false, constrainWidth: false});


  }

}
