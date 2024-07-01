import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Si hay un usuario en sessionStorage, redirigir a home
    if (sessionStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    const { username, password } = this.loginForm.value;
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('user', username); // Guardar usuario en sessionStorage
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
