import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

	nomePortal: string;
	cursos: string[];
	
	constructor() {
		this.nomePortal = 'www.casasbahia.com.br';
		this.cursos = ['item 1', 'item 2', 'item 3', 'item 4']
	}
	
	ngOnInit() {
	}

}
