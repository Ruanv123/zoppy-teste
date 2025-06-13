import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { HlmToasterComponent } from '@spartan-ng/helm/sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HlmToasterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'front-end';
}
