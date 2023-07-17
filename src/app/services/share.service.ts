import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}

  shareText(text: string) {
    navigator.share({ text: text });
  }
}
