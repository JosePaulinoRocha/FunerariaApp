import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  userId: number;
  fullName: string;
  phone: string;
  email: string;
  isAdmin: boolean;
}

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class UserModalComponent implements OnInit {
  @Input() user: User = {
    userId: 0,
    fullName: '',
    phone: '',
    email: '',
    isAdmin: false
  };
  @Input() isEditMode: boolean = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

  saveUser() {
    this.modalController.dismiss(this.user, this.isEditMode ? 'edit' : 'add');
  }
}
