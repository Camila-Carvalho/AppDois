import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { APPDOIS_API } from './app.api';
import { Observable, Observer } from 'rxjs';


@Injectable()
export class OfertasService {

    constructor(private http: HttpClient){}

    getOfertas(): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${APPDOIS_API}/ofertas?destaque=true`)
    }

    getOfertasCategoria(categoria: string): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${APPDOIS_API}/ofertas?categoria=${categoria}`)
    }

}


/*
export class OfertasService {

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição http
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then((resposta: any) => resposta.json())
        //retornar uma promise Oferta[]
        
    }

}
*/