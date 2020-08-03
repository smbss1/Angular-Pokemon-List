import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top/top.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipeModule,
  RouterModule.forRoot([
      { path: '', component: PokemonListComponent },
    ]) ],
  declarations: [ AppComponent, TopBarComponent, PokemonListComponent, PokemonComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
