import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NominaAppComponent } from './components/nomina-app/nomina-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NominaAppComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'nomina-app';
}
