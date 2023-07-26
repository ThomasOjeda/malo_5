import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}

  shareText(text: string) {
    if (!('share' in navigator)) {
      alert('Web Share API not supported.');
      return;
    }

    navigator
      .share({
        title: 'Tasks App',
        text: 'A really simple web app using angular',
        url: `http://localhost:4200/tasks/${text}`,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
  }
}
