import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatBadgeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  books: Array<string> = ["Buku 1", "Buku 2", "Buku 3", "Buku 4"];

  // objectBooks: Array<object> = [
  //   { id: 1, name: 'Buku 1' },
  //   { id: 2, name: 'Buku 2' },
  //   { id: 3, name: 'Buku 3' },
  //   { id: 4, name: 'Buku 4' },
  // ];

  objectBooks: Array<any> = [
    { id: 1, name: 'Buku 1' },
    { id: 2, name: 'Buku 2' },
    { id: 3, name: 'Buku 3' },
    { id: 4, name: 'Buku 4' },
  ];

  addBook() {
    this.objectBooks.push({ id: 5, name: 'Buku 5' });
  }

  deleteBook(objectBook: any) {
    let index = this.objectBooks.indexOf(objectBook);
    this.objectBooks.splice(index, 1);
  }
}
