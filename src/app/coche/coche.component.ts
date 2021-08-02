import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CochesService } from './../coches.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  coche: any = {};

  constructor(private _cochesService: CochesService,
    private activateRoute: ActivatedRoute) {

    this.activateRoute.params.subscribe(params => {
      this.coche = this._cochesService.getCoche(params['id']);
    });
  }
  
  ngOnInit(): void {
  }

}
