import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCadastroComponent } from './modal-cadastro/modal-cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule               
  ]
})
export class SharedModule { }
