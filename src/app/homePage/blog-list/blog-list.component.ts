import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
blogs = [
  {
    title: 'Solar Panel',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
    image: 'https://www.sciencealert.com/images/2019-06/processed/hmm-solar_1024.jpg'
  },
  {
    title: 'How Solar can decrease your electric cost by 5%',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
    image: 'https://www.sciencealert.com/images/2019-06/processed/hmm-solar_1024.jpg'
  },
  {
    title: '5 ways you can be more sustainable',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
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
