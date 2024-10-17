import { Component } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  standalone: true,
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  // Логика компонента
  onSubmit() {
    // Здесь может быть вызов сервиса авторизации
    console.log('Form submitted');
  }
}
