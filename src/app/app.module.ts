import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RollOnScrollDirective } from './directives/roll-on-scroll.directive';
import { PokedexModule } from './modules/pokedex/pokedex.module';

@NgModule({
  declarations: [
    AppComponent,
    RollOnScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PokedexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
