import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';

import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertasPesquisada: Oferta[]

  private subjectPesquisa: Subject<string> = new Subject<string>()
  
  constructor(private ofertasService: OfertasService) { }

  ngOnInit():void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), //para levar 1 segundo após a última tecla pressionada para fazer a busca
      distinctUntilChanged(),//utilizado para caso pesquise o que já está na barra de pesquisa, ele não vá até o servidor buscar novamente
      switchMap((termo: string) => {

        if(termo.trim() === ''){ //aqui é um teste para em caso da pesquisa for vzia, ele não retorne nada
          return of<Oferta[]>([])
        }

        return this.ofertasService.pesquisaOfertas(termo)
     })
    )
    this.ofertas.subscribe((ofertas: Oferta[]) => this.ofertasPesquisada = ofertas)
  }

  //método para buscar o termo da busca
  public pesquisa(termoDeBusca: string): void {
    this.subjectPesquisa.next(termoDeBusca)//subject como observador
  }

}

/*
//método para buscar o termo da busca
  public pesquisa(termoDeBusca:string): void{
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDeBusca)

    this.ofertas.subscribe(
      (ofertas: Oferta[])=> console.log(ofertas), //.next()
      (erro: any)=>console.log('Erro status: ', erro.status), //.error()
      ()=>console.log('Fluxo de eventos completo!') //.complete()
    )
  }
*/

/*
MÉTODO DE PESQUISA USANDO EVENTOS
public pesquisa(event: Event): void{
    //evento= objeto; targuet= um dos inputs; necessário o HTMLInputElement para poder pegar o valor (value)
    console.log((<HTMLInputElement>event.target).value)
  }
*/