import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  password: string = '';
  confirmPassword: string = '';
  strengthText: string = 'Weak';
  strengthClass: string = 'weak';

  showPassword = false;
  darkMode = false;

  hasMinLength = false;
  hasUppercase = false;
  hasNumber = false;
  hasSpecial = false;

  checkStrength() {
    this.hasMinLength = this.password.length >= 8;
    this.hasUppercase = /[A-Z]/.test(this.password);
    this.hasNumber = /[0-9]/.test(this.password);
    this.hasSpecial = /[^A-Za-z0-9]/.test(this.password);

    let score = 0;
    if (this.hasMinLength) score++;
    if (this.hasUppercase) score++;
    if (this.hasNumber) score++;
    if (this.hasSpecial) score++;

    if (score <= 1) {
      this.strengthText = 'Weak';
      this.strengthClass = 'weak';
    } else if (score == 2 || score == 3) {
      this.strengthText = 'Medium';
      this.strengthClass = 'medium';
    } else {
      this.strengthText = 'Strong';
      this.strengthClass = 'strong';
    }
  }
}