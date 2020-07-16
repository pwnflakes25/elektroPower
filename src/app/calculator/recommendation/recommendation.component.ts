import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
recommendedPackage: any = 'Basic 3kw Package';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    if (this.data < 2000) {
      this.recommendedPackage = '3kW Basic';
    }
      else if(this.data >= 2000 && this.data <= 3200) {
      this.recommendedPackage = '3kW Standard';
    } else if (this.data >= 3200 && this.data <= 3800) {
      this.recommendedPackage = '3kW Gold or 5kW Standard';
    } else if (this.data >= 3800 && this.data <= 4800) {
      this.recommendedPackage = '5kW Standard';
    } else if (this.data >= 4800 && this.data <= 5200) {
      this.recommendedPackage = '5kW Gold or 8kW Basic';
    } else if (this.data >= 5200 && this.data <= 5600) {
      this.recommendedPackage = '5kW Gold or 8kW Standard';
    } else if (this.data >= 5600 && this.data <= 7000) {
      this.recommendedPackage = '8kW Standard';
    } else if (this.data >= 7000 && this.data <= 8000) {
      this.recommendedPackage = '8kW Gold or 10kW Standard';
    } else if (this.data >= 8000 && this.data <= 9600) {
      this.recommendedPackage = '10kW Standard';
    } else if (this.data >= 9600) {
      this.recommendedPackage = '10kW Gold';
    }
  }



}
