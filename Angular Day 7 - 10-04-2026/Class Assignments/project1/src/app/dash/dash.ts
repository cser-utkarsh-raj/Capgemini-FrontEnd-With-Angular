import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dash.html',
  styleUrl: './dash.css',
})
export class Dash {
  route = inject(Router);
  navigatetohome() {
    this.route.navigateByUrl('');
  }
}
