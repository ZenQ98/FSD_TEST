import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrimService {
  private baseUrl = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims';

  constructor(private http: HttpClient) { }

  getTrims(make: string, modelId: string): Observable<any> {
    const url = `${this.baseUrl}&make=${make}&model=${modelId}`;
    return this.http.jsonp(url, 'callback');
  }

  getTrimDetails(make: string, modelId: string, trimId: string): Observable<any[]> {
    // Fetch all trims for the given model
    return this.getTrims(make, modelId).pipe(
      map((response: any) => {
        // Filter the trims array to find all trims with the desired trimId
        return response.Trims.filter((trim: any) => trim.model_trim === trimId);
      })
    );
  }
}
