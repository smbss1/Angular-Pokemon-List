import { Component, OnInit } from '@angular/core';
import pokemons from '../pokemons.json';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  searchText;
  pokemons = pokemons;

  constructor() { }

  ngOnInit() {
  }

}