import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
[x: string]: any;
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
