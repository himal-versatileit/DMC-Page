import { Component } from '@angular/core';

@Component({
  selector: 'app-council',
  templateUrl: './council.component.html',
  styleUrl: './council.component.scss'
})
export class CouncilComponent {

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
