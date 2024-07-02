import { Component } from '@angular/core';
import { IonicModule, MenuController } from "@ionic/angular";
import { RouterModule, Router } from '@angular/router';
import { home, analytics, images, personCircle, person, mail, call, shieldCheckmark, addCircleOutline, close, accessibility, logOut } from "ionicons/icons";
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {
    addIcons({ home, analytics, images, personCircle, person, mail, call, shieldCheckmark, addCircleOutline, close, accessibility, logOut })
  }

  logout() {
    sessionStorage.removeItem('user'); // Eliminar usuario de sessionStorage
    this.menu.close(); // Cerrar el menú lateral si está abierto
    this.router.navigate(['/login']); // Redirigir a la pantalla de login
  }
}
