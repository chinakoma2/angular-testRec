import { Component, OnInit } from '@angular/core';
import { TacheData, TacheService } from 'src/app/services/tache/tache.service';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  
  faTasks = faTasks;
  dataSource: TacheData = null;
  displayedColumns: string[]=['id','numero','statut','date'];
 
  constructor(private tacheService: TacheService) { }

  ngOnInit(): void {
    this.initDataSource();
  } 

  initDataSource(){
    this.tacheService.findAll(0,10).pipe(
      map((tacheData: TacheData)=> this.dataSource = tacheData)
    ).subscribe();
  }

  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;

    this.tacheService.findAll(page,size).pipe(
        map((tacheData: TacheData) => this.dataSource = tacheData)
      ).subscribe();
   
  }

}
