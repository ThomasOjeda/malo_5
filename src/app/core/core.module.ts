import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, MainPageComponent, NotFoundComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
