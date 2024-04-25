import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './component/loading/loading.component';
import { GlitchComponent } from './component/glitch/glitch.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AppComponent, LoadingComponent, GlitchComponent]
})
export class AppComponent {
  title = 'strona1';
}
