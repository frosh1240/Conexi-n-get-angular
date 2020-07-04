import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/todos';

  ObtenerDatos():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
