import { Injectable } from '@angular/core';
import { Tache } from '../../classes/tache/tache';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap, map, catchError} from 'rxjs/operators';

export interface TacheData{
  content: Tache[];
  pageable:{
            sort:{
                  sorted:boolean;
                  unsorted:boolean;
                  empty:boolean;
                 };
            offset:number;
            pageSize:number;
            pageNumber:number;
            paged:boolean;
            unpaged:boolean;
           };
  totalPages:number;
  last:boolean;
  totalElements:number;
  size:number;
  number:number;
  numberOfElements:number;
  sort:{
        sorted:boolean;
        unsorted:boolean;
        empty:boolean;
       };
  first:boolean;
  empty:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }
  findAll(page: number, size: number): Observable<TacheData> {
 
    let url = `http://localhost:8080/api/historique/consulterTaches/${page}/${size}`;
   

    return this.http.get(url).pipe(
      map((tacheData: TacheData) => tacheData),
      catchError(err => throwError(err))
    )
  }
}
