import { Component, OnInit } from '@angular/core';
import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
  }

  //método para buscar o termo da busca
  public pesquisa(termoDeBusca:string): void{
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDeBusca)

    this.ofertas.subscribe(
      (ofertas: Oferta[])=> console.log(ofertas), //.next()
      (erro: any)=>console.log('Erro status: ', erro.status), //.error()
      ()=>console.log('Fluxo de eventos completo!') //.complete()
    )
  }

}


/*
MÉTODO DE PESQUISA USANDO EVENTOS
public pesquisa(event: Event): void{
    //evento= objeto; targuet= um dos inputs; necessário o HTMLInputElement para poder pegar o valor (value)
    console.log((<HTMLInputElement>event.target).value)
  }
*/