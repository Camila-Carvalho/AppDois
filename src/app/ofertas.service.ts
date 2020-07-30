import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { APPDOIS_API } from './app.api';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable()
export class OfertasService {

    resposta: any

    constructor(private http: HttpClient){}

    getOfertas(): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${APPDOIS_API}/ofertas?destaque=true`)
    }

    getOfertasCategoria(categoria: string): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${APPDOIS_API}/ofertas?categoria=${categoria}`)
    }

    getOfertaPorId(id:number): Promise<Oferta>{
        return this.http.get(`${APPDOIS_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: Oferta) => {
            this.resposta = JSON.stringify(resposta);
            return resposta[0];
        })
    }
}