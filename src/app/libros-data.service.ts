import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const endpoint="http://localhost:3000/libro"

@Injectable({
  providedIn: 'root'
})
export class LibrosDataService {

  constructor(private http: HttpClient) { }

  getLibros() {
   return this.http.get(endpoint);
  }

}
