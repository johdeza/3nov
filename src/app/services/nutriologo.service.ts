import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutriologoService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  savedNutriologo(value: any) {
    return this.http.post(`${this.apiUrl}nutriologist`, value)
  }
}
