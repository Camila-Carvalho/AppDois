import { Component, OnInit } from '@angular/core';
import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]
 
  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    this.ofertasService.getOfertas2()
    .then(( ofertas: Oferta[]) => { //método THEN executa uma ação quando ela estiver resolvida. Entre parenteses fica o tipo de retorno
      this.ofertas = ofertas //aqui fica especificado o que deve ser feito com o retorno
    })
    .catch((param: any) => {console.log(param)})
      
  }

}
