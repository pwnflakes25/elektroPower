import { Component, OnInit } from '@angular/core';
import {RecommendationComponent} from './recommendation/recommendation.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
declare const M;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
calculatorForm: FormGroup;
appliances = [
  'tubeLights', 'energySavers', 'ledBulbs',
  'fans', 'tvs', 'ledTvs', 'washingMachines',
   'freezers', 'refrigerators', 'computers', 'waterPumps',
   'irons', 'splitAc1', 'splitAc15', 'splitAc2', 'splitAc35',
   'splitAc4', 'inverterAc1', 'inverterAc15', 'inverterAc2'
 ]

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.calculatorForm = this.fb.group({
      tubeLights: [0, Validators.required],
      energySavers: [0, Validators.required],
      ledBulbs: [0, Validators.required],
      fans: [0, Validators.required],
      tvs: [0, Validators.required],
      ledTvs: [0, Validators.required],
      washingMachines: [0, Validators.required],
      freezers: [0, Validators.required],
      refrigerators: [0, Validators.required],
      computers: [0, Validators.required],
      waterPumps: [0, Validators.required],
      irons: [0, Validators.required],
      splitAc1: [0, Validators.required],
      splitAc15: [0, Validators.required],
      splitAc2: [0, Validators.required],
      splitAc35: [0, Validators.required],
      splitAc4: [0, Validators.required],
      inverterAc1: [0, Validators.required],
      inverterAc15: [0, Validators.required],
      inverterAc2: [0, Validators.required],
    })
  }

  ngAfterViewInit(): void {
    let elems  = document.querySelectorAll("input[type=range]");
    let instance = M.Range.init(elems);
  }

  //I know this is a bad practice, gotta update it. client wants it done real quickly
  onCalculate() {
    let value = this.calculatorForm.value;
    let sum = value.tubeLights * 40 + value.energySavers * 25 + value.ledBulbs * 7 + value.tvs * 250 +
      value.ledTvs * 50 + value.washingMachines * 800 + value.freezers * 350 + value.refrigerators * 350 +
      value.computers * 250 + value.waterPumps * 700 + value.irons * 1000 + value.splitAc1 * 1800 + value.splitAc15 * 2400 +
      value.splitAc2 * 3000 + value.splitAc35 * 7500 + value.splitAc4 * 8000 + value.inverterAc1 * 1000 +
      value.inverterAc15 * 1500 + value.inverterAc2 * 2000;
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

}
