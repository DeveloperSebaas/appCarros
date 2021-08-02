import { Component, OnInit } from '@angular/core';
import { CochesService } from './../coches.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  coches: any[] = [];
  termino: string = '';

  constructor(private _cochesService: CochesService,
                        private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.coches = this._cochesService.buscarCoche(params['termino']);
      console.log(this.coches);
    });
  }

}
