import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrl: './modal-cadastro.component.css',
})

export class ModalCadastroComponent {
  cpf: string = '';
  tel: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordsDoNotMatch: boolean = false;
  preview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(public activeModal: NgbActiveModal) { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSubmit(form: NgForm) {
    this.passwordsDoNotMatch = this.password !== this.confirmPassword;

    if (form.invalid || this.passwordsDoNotMatch) {
      console.log('Formulário inválido.');
      return;
    }
    console.log('Formulário enviado com sucesso!');
  }
}

