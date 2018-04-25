import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { BoardCreationComponent } from './board-creation/board-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameplayComponent,
    BoardCreationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
