import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

  public pesquisa(termoDeBusca:string): void{
    console.log(termoDeBusca)
  }

}


/*
MÉTODO DE PESQUISA USANDO EVENTOS
public pesquisa(event: Event): void{
    //evento= objeto; targuet= um dos inputs; necessário o HTMLInputElement para poder pegar o valor (value)
    console.log((<HTMLInputElement>event.target).value)
  }
*/