import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const endpoint=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LibrosDataService {

  constructor(private http: HttpClient) { }

  getLibros() {
   return this.http.get(endpoint);
  }

}
