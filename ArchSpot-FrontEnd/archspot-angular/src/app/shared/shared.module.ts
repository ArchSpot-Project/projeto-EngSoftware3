import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStatusBarComponent } from './components/project-status-bar/project-status-bar.component';



@NgModule({
  declarations: [
    ProjectStatusBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectStatusBarComponent
  ]
})
export class SharedModule { }
