import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { APPDOIS_API } from './app.api';
import { Observable } from 'rxjs';


@Injectable()
export class OfertasService {

    constructor(private http: HttpClient){}

    ofertas(): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${APPDOIS_API}/ofertas?destaque=true`)
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