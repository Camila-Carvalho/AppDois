import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APPDOIS_API } from './app.api';

import { Observable } from 'rxjs';
import {retry} from 'rxjs/operators'

import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

    resposta: any

    constructor(private http: HttpClient){}

    public getOfertas(): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${APPDOIS_API}/ofertas?destaque=true`)
    }

    public getOfertasCategoria(categoria: string): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${APPDOIS_API}/ofertas?categoria=${categoria}`)
    }

    public getOfertaPorId(id:number): Promise<Oferta>{
        return this.http.get(`${APPDOIS_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: Oferta) => {
            this.resposta = JSON.stringify(resposta);
            return resposta[0];
        })
    }

    public getComoUsarOfertaPorId(id: string): Promise<string>{
        return this.http.get(`${APPDOIS_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }

    public getOndeFicaOfertaPorId(id: string): Promise<string>{
        return this.http.get(`${APPDOIS_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${APPDOIS_API}/ofertas?descricao_oferta_like=${termo}`).pipe(retry(3)) //retry é para ele tentar realizar a requisição novamente, no caso, coloquei para tentar 3 vezes
    }
}