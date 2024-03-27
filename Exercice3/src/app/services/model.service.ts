import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private baseUrl = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels';
  
  constructor(private http: HttpClient) { }

  // Se recogen todos los modelos
  getModels(make: string): Observable<any> {
    const url = `${this.baseUrl}&make=${make}`;
    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => res.Models)
    );
  }
}
