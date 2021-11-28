import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserData(): Promise<any> {
    return this.http.get('https://api.hatchways.io/assessment/students').toPromise();
  }

}
