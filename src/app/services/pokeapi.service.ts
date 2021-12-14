import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from '../interfaces/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  url: string = 'https://pokeapi.co/api/v2/pokemon/';


  constructor(private http: HttpClient) { }

  header = new HttpHeaders()
  .set('Content-Type', 'application/json');

  getPokemonByName(): Observable<Pokemons[]> {
    return this.http.get<Pokemons[]>(`${this.url}`, {headers: this.header} );
  }

}
