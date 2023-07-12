import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //private url = 'http://jsonplaceholder.typicode.com/posts'
  private url ="http://localhost:9999/coffee"

  constructor(private h: HttpClient) { }

  getAmitava()
  {
    return this.h.get(this.url);

  }
}
