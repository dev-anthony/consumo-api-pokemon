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
  // img: string;

  constructor( private pokeapiService: PokeapiService  ) { }

  ngOnInit(): void {
    this.getPokemonByName();
  }

  getPokemonByName (): void {
    this.pokeapiService.getPokemonByName().subscribe((res: any) => {
      this.pokemons = res.results;
      //  console.log(this.pokemons);
      //mostrando la imagen de cada pokémon desde el sprite.front_default
      this.pokemons.forEach((data: any) => {
        data.img = data.url.split('/')[6];
        data.img = data.img.split('.')[0];
        data.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.img}.svg`;
        // console.log(data.img);
      });
    });
  }
}