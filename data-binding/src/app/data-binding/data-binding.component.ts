import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']

  styles: [ ` .highlight { background: yellow; } `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://cursos.com.br';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/sports/';

  valorAtual: string = '';
  valorSalvo: string = '';
  valorBlur: string = '';

  isMouseOver = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 5;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  salvarBlur(valor) {
    this.valorBlur = valor;
  }

  salvarClicado(valor) {
    this.valorClicado = valor;
  }

  onmouseover() {
    this.isMouseOver = true;
    console.log('passou');
  }

  onmouseout() {
    this.isMouseOver = false;
    console.log('saiu');
  }

  constructor() { }

  ngOnInit() {
  }

}
