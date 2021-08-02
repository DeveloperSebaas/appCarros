import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

    private coches:coche[] = [
      {
        nombre: "Beetle Coast",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis praesentium distinctio officiis, sunt aspernatur nulla sed, exercitationem ea, eos dolorum facere debitis natus ex minima mollitia magnam blanditiis incidunt voluptates possimus reiciendis ab corporis?",
        img: "assets/img/beetle.png",
        aparicion: "2018-05-01"
      },
      {
        nombre: "Tiguan",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis praesentium distinctio officiis, sunt aspernatur nulla sed, exercitationem ea, eos dolorum facere debitis natus ex minima mollitia magnam blanditiis incidunt voluptates possimus reiciendis ab corporis?",
        img: "assets/img/Tiguan.jpg",
        aparicion: "2021-05-01"
      },
      {
        nombre: "Fiesta",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis praesentium distinctio officiis, sunt aspernatur nulla sed, exercitationem ea, eos dolorum facere debitis natus ex minima mollitia magnam blanditiis incidunt voluptates possimus reiciendis ab corporis?",
        img: "assets/img/fiesta.jpg",
        aparicion: "2019-01-01"
      },
      {
        nombre: "Lamborghini",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis praesentium distinctio officiis, sunt aspernatur nulla sed, exercitationem ea, eos dolorum facere debitis natus ex minima mollitia magnam blanditiis incidunt voluptates possimus reiciendis ab corporis?",
        img: "assets/img/Lamborghini.jpg",
        aparicion: "2020-05-01"
      },
      {
        nombre: "Ferrari",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis praesentium distinctio officiis, sunt aspernatur nulla sed, exercitationem ea, eos dolorum facere debitis natus ex minima mollitia magnam blanditiis incidunt voluptates possimus reiciendis ab corporis?",
        img: "assets/img/ferrari.jpg",
        aparicion: "2018-05-01"
      },
      {
        nombre: "Audi",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis praesentium distinctio officiis, sunt aspernatur nulla sed, exercitationem ea, eos dolorum facere debitis natus ex minima mollitia magnam blanditiis incidunt voluptates possimus reiciendis ab corporis?",
        img: "assets/img/audi.jpg",
        aparicion: "2021-05-01"
      },
    ];

  constructor() {
    console.log('Servicio listo');
  }

  getCoches():coche[] { //Retorna un arreglo tipo coche[]
    return this.coches;
  }

  getCoche(idx: number) {
    return this.coches[idx];
  }

  buscarCoche(termino: string): coche[]{
    let cochesArr: coche[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i < this.coches.length; i++) {
      let coche = this.coches[i];
      let nombre = coche.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        coche.idx = i;
        cochesArr.push(coche);
      }
    }
    return cochesArr;
  }

}

export interface coche{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    idx?: number;
};
