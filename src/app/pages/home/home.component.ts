import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
declare function carousel():any


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2) { }
  ngOnInit(): void {
    carousel()
  }
  darkMode: boolean = false;


   currentIndex = 0;

 moveCarousel(direction: any) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  this.currentIndex += direction;

  if (this.currentIndex < 0) {
    this.currentIndex = totalItems - 1;
  } else if (this.currentIndex >= totalItems) {
    this.currentIndex = 0;
  }

  const offset = -this.currentIndex * 100;
  // carousel.style.transform = `translateX(${offset}%)`;
}


  Zoom(id: number) {
    if (id === 3) {
      document.body.classList.remove("normal");
      document.body.classList.remove("zoomout");
      document.body.classList.add("zoomin");
    } else if (id === 2) {
      document.body.classList.remove("zoomout");
      document.body.classList.remove("zoomin");
      document.body.classList.add("normal");
    } else if (id === 1) {
      document.body.classList.remove("normal");
      document.body.classList.remove("zoomin");
      document.body.classList.add("zoomout");
    }
  }
  
}
