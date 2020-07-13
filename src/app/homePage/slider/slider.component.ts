import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const M;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
logos: string[] = [
      "https://www.wateen.com/wp-content/uploads/2015/12/Askari-Bank.png",
      "https://f0.pngfuel.com/png/279/979/logo-faysal-bank-islamic-faysal-bank-islamic-vip-membership-card-png-clip-art.png",
      "https://upload.wikimedia.org/wikipedia/en/5/58/Fauji_Foods_logo.png",
      "https://seeklogo.com/images/P/pel-logo-4C010F4F8D-seeklogo.com.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bankalhabiblogo.svg/1200px-Bankalhabiblogo.svg.png",
      "https://seeklogo.com/images/U/ubl-united-bank-limited-pakistan-logo-6AE8F3CDEE-seeklogo.com.png"
    ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let carouselElem = document.querySelectorAll('.logoCarousel');
    let instances = M.Carousel.init(carouselElem, {dist: 0, shift: 40, numVisible: 5, padding: 10});
  }

}
