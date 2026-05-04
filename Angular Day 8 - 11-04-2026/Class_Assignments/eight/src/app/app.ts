import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reactiveforms } from "./reactiveforms/reactiveforms";
import { Http} from "./http/http";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Reactiveforms, Http],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eight');
}
