import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  data: JSON | null = null;
  verifiableCredential: string;
  constructor(public modalRef: MdbModalRef<ModalComponent>) {
    this.verifiableCredential = JSON.stringify(this.data,null,'\t');
    console.log("the changed data is: " + this.verifiableCredential);
  }
}
