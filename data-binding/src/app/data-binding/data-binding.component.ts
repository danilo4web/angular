import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://cursos.com.br';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/sports/';

  getValor() {
    return 5;
  }
  getCurtirCurso() {
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
