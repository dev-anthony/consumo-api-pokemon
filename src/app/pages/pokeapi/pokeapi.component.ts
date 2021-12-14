import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/interfaces/pokemons';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {

  pokemons: Pokemons | any;
  img: string;
  titulo: string = 'PokeAPIcl';
 

  constructor( private pokeapiService: PokeapiService  ) { }

  ngOnInit(): void {
    this.getPokemonByName();
  }

  getPokemonByName (): void {
    this.pokeapiService.getPokemonByName().subscribe((res: any) => {
      this.pokemons = res.results;
      // console.log(this.pokemons);
      //mostrando la imagen de cada pokémon desde el sprite.front_default
      this.pokemons.forEach((res: any) => {
        res.img = res.url.split('/')[6];
        res.img = res.img.split('.')[0];
        res.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${res.img}.svg`;
        // console.log(res.img);
      });

    });
  }
}