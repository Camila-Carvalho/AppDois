import { Component, OnInit } from '@angular/core';
import { Oferta } from './../shared/oferta.model';

import { OfertasService } from './../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  ofertas : Oferta[]

  constructor(public ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.getOfertasCategoria('diversao').subscribe(ofertas => this.ofertas = ofertas)
  }

}
