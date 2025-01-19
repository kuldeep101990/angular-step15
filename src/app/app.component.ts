import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-step15';
  message = "Welcome to Angular Deployment Example!";

  showMessage() {
    this.message = "Your Angular app is ready for deployment!";
  }
}
