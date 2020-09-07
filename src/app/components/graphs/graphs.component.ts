import { Component, OnInit } from '@angular/core';
import { GraphService } from 'src/app/services/graph/graph.service';
import { Volume } from '../../classes/volume/volume';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  dataSource: Volume[] = null;
  anneeVal: number = null;

  public graph = {
    data: [
        { x: ['janv.','févr','mars','avr.','mai','juin','juill.','août','sept.','oct.','nov.','déc.'], y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
    ],
    layout: {width: 1000, height: 700, title: 'Pas des info affichee'}
};
  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
  }

drawChartVolumeChange(annee: number) {

    this.graphService.drawChartVolume(annee).pipe(
        map((volumeData: Volume[]) =>this.graph.data[0].y=[volumeData[0].valeur,volumeData[1].valeur,volumeData[2].valeur,volumeData[3].valeur,volumeData[4].valeur,volumeData[5].valeur,volumeData[6].valeur,volumeData[7].valeur,volumeData[8].valeur,volumeData[9].valeur,volumeData[10].valeur,volumeData[11].valeur])
      ).subscribe();
      this.graph.layout.title=`Volume de taches par mois pour l\'annee ${annee}`;
     
  }
}
