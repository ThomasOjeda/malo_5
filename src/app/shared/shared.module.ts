import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  declarations: [CustomButtonComponent, DeleteButtonComponent],
  imports: [CommonModule],
  exports: [CustomButtonComponent, DeleteButtonComponent],
})
export class SharedModule {}
