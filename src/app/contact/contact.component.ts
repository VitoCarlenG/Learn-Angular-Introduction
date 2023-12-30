import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './contact.component.html',
  template: `
  <h1>
    {{ contact }}
  </h1>
  <ul>
    <li *ngFor="let telepon of telepons">
      {{ telepon }}
    </li>
  </ul>
  `,
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact = "Dibuat dengan Property Template serta Variabel";
  telepons = ["0811", "0822"];
}
