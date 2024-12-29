import { Injectable } from '@angular/core';
import axios from 'axios';
import { Book } from './models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = 'https://localhost:7268/api/Books';

  constructor() {}

  async getBooks(): Promise<Book[]> {
    try {
      const response = await axios.get<Book[]>(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  }
}