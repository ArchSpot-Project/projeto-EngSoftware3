import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCadastroComponent } from './modal-cadastro/modal-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ProjectStatusBarComponent } from './components/project-status-bar/project-status-bar.component';



@NgModule({
  declarations: [
    ModalCadastroComponent,
    ProjectStatusBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProjectStatusBarComponent
  ]
})
export class SharedModule { }
