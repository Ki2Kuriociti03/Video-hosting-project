import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorizationComponent} from "./pages/authorization/authorization.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorizationComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'video-platform-application-frontend';
}
