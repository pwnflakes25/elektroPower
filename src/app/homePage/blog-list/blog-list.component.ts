import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
blogs = [
  {
    title: 'Benefits of Solar Panels in Pakistan',
    subText: 'Coming Soon',
    image: 'https://www.sciencealert.com/images/2019-06/processed/hmm-solar_1024.jpg'
  },
  {
    title: 'How to Decide Which Solar Package to Choose?',
    subText: 'Coming Soon',
    image: 'https://www.sciencealert.com/images/2019-06/processed/hmm-solar_1024.jpg'
  },
  {
    title: 'How Do Solar Panels Work?',
    subText: 'Coming Soon',
    image: 'https://www.sciencealert.com/images/2019-06/processed/hmm-solar_1024.jpg'
  }
]


  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index, item) {
   return index;
  }

}
