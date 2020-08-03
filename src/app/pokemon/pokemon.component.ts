import { Component, OnInit } from '@angular/core';
import pokemons from '../pokemons.json';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}