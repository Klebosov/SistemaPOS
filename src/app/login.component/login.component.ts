import { Component, ViewChild, ElementRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { usuarios } from "../data/uss";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  uss: string = "";
  password: string = "";

  @ViewChild('video') video!: ElementRef;

  constructor(private router: Router) {}

  login() {
    const user = usuarios.find(
      u => u.uss === this.uss && u.password === this.password
    );

    if (user) {
      if (user.rol === "admin") {
        this.router.navigate(['/admin']); 
      } else {
        this.router.navigate(['/principal']); 
      }

      this.limpiar();
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  }

  limpiar() {
    this.uss = "";
    this.password = "";
  }

  async startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    this.video.nativeElement.srcObject = stream;
  }

  registerFace() {
    alert("Rostro registrado (simulado)");
  }

  loginFace() {
    alert("Login facial (simulado)");
  }
}