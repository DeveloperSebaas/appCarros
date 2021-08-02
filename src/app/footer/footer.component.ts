import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fecha: Number;

  constructor() {
    this.fecha = new Date().getFullYear(); //Interpolación de fecha
  }

  ngOnInit(): void {
  }

}
