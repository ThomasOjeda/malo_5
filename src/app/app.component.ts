import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
