import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let fbq:Function;
declare const M;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'elektroPower';
  actionButtonInstance: any;

  constructor(private router: Router){
    router.events.subscribe((y: NavigationEnd) => {
      if(y instanceof NavigationEnd){
        fbq('track', 'PageView');
      }
    })
  }

  ngAfterViewInit(): void {
    let actionButtonElems = document.querySelectorAll('.fixed-action-btn');
    this.actionButtonInstance = M.FloatingActionButton.init(actionButtonElems);
  }

}
