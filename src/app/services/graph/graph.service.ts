import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Volume } from '../../classes/volume/volume';
import { HttpClient } from '@angular/common/http';
import { map, catchError, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) { }
  drawChartVolume(annee: number): Observable<Volume[]> {
 
    let url = `http://localhost:8080/api/historique/volumetaches/${annee}`;
   

    return this.http.get(url).pipe(
      map((volumeData: Volume[]) => volumeData),
      catchError(err => throwError(err))
    )
  }
}
