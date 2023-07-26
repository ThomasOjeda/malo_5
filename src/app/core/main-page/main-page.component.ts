import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  fullscreen: boolean = false;
  handleFullscreenButtonClicked() {
    if (document.fullscreenEnabled) {
      let elem = document.documentElement;

      this.fullscreen = !this.fullscreen;
      if (this.fullscreen) elem.requestFullscreen();
      else document.exitFullscreen();
    }
  }
}
