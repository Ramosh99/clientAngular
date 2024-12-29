import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { Book } from './models/book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  loading = false;
  error: string | null = null;

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    try {
      this.loading = true;
      this.books = await this.dataService.getBooks();
    } catch (error) {
      this.error = 'Failed to load books';
    } finally {
      this.loading = false;
    }
  }
}