import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  savedPatient(value: any) {
    return this.http.post(`${this.apiUrl}patient`, value)
  }
}
