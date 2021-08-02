import { Component, OnInit } from '@angular/core';
import { coche, CochesService } from '../coches.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  coches: coche[] = [];

  constructor(private _cochesService: CochesService,
                        private router: Router) { }

  ngOnInit(): void {
    this.coches = this._cochesService.getCoches();
  }

  verCoche(idx: number) {
    this.router.navigate(['/coche',idx]);
  }

}
