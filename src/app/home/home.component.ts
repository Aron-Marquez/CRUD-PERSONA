import { Component } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PersonaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
