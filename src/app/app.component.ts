import { Component } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { RouterModule } from '@angular/router';
import { home, analytics, images } from "ionicons/icons";
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class AppComponent {
  constructor() {
    addIcons({ home, analytics, images})
  }
}
