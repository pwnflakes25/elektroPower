import { Component, OnInit, AfterViewInit } from '@angular/core';
import {RecommendationComponent} from './recommendation/recommendation.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {appliancesList} from './applianceArray';
declare const M;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, AfterViewInit {
appliances = [...appliancesList];
isTouched = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let elems  = document.querySelectorAll("input[type=range]");
    let instance = M.Range.init(elems);

    //below is just a code to change background color the thumb of the slider (number that pops up)
    let list = document.getElementsByClassName('thumb');
    for (let i = 0; i <= list.length; i++) {
      (<HTMLElement>list[i]).style.backgroundColor = "#232330";
    }
  }

  onCalculate() {
    let sum = 0;
    this.appliances.forEach(element => {
      sum += (element.quantity * element.power);
    });
    this.openDialog(sum);
  }

  openDialog(data: number) {
      const dialogRef = this.dialog.open(RecommendationComponent, {
        data: data
      });

      dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
     });
  }

  onReset() {
    this.appliances.forEach(element => {
      element.quantity = 0;
    })
    this.isTouched = false;
  }

}
