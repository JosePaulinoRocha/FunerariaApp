import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from "@ionic/angular";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserModalComponent } from './modal/user-modal.component';

interface User {
  userId: number;
  fullName: string;
  phone: string;
  email: string;
  isAdmin: boolean;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, UserModalComponent],
})
export class UsuariosComponent implements OnInit {
  searchTerm: string = '';
  users: User[] = [
    { userId: 1, fullName: 'Juan Pérez', phone: '555-1234', email: 'juan.perez@example.com', isAdmin: true },
    { userId: 2, fullName: 'Ana Gómez', phone: '555-5678', email: 'ana.gomez@example.com', isAdmin: false },
    { userId: 3, fullName: 'Carlos Díaz', phone: '555-9101', email: 'carlos.diaz@example.com', isAdmin: true },
    { userId: 4, fullName: 'María Rodríguez', phone: '555-2468', email: 'maria.rodriguez@example.com', isAdmin: false },
    { userId: 5, fullName: 'Pedro López', phone: '555-3698', email: 'pedro.lopez@example.com', isAdmin: true },
    { userId: 6, fullName: 'Laura Martínez', phone: '555-7531', email: 'laura.martinez@example.com', isAdmin: false },
    { userId: 7, fullName: 'Javier Sánchez', phone: '555-8024', email: 'javier.sanchez@example.com', isAdmin: true },
    { userId: 8, fullName: 'Sofía Ramírez', phone: '555-9753', email: 'sofia.ramirez@example.com', isAdmin: false },
    { userId: 9, fullName: 'Diego Herrera', phone: '555-6412', email: 'diego.herrera@example.com', isAdmin: true },
    { userId: 10, fullName: 'Elena Castro', phone: '555-8874', email: 'elena.castro@example.com', isAdmin: false },
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  filteredUsers(): User[] {
    return this.users.filter(user => {
      const searchTermLower = this.searchTerm.toLowerCase();
      const isAdminMatch = user.isAdmin && 'administrador'.includes(searchTermLower);
      const userIdMatch = user.userId.toString().includes(searchTermLower);
  
      return (
        user.fullName.toLowerCase().includes(searchTermLower) ||
        user.phone.includes(this.searchTerm) ||
        user.email.toLowerCase().includes(searchTermLower) ||
        isAdminMatch ||
        userIdMatch
      );
    });
  }

  async openModal(user?: User) {
    const modal = await this.modalController.create({
      component: UserModalComponent,
      componentProps: {
        user: user || { userId: 0, fullName: '', phone: '', email: '', isAdmin: false }
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        // Lógica para manejar los datos del modal
      }
    });

    return await modal.present();
  }
}
