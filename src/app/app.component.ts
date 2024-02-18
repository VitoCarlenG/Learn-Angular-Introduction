import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutComponent, MatButtonModule, MatToolbarModule, RouterModule, DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learn-angular';
  author = 'VitoCarlenG';
  message() {
    return "Selamat Datang";
  }
  copyright: string = "Copyright Vito Carlen Giovanni";
}
