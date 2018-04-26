import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { BoardCreationComponent } from './board-creation/board-creation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpponentsBoardComponent } from './opponents-board/opponents-board.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameplayComponent,
    BoardCreationComponent,
    NavbarComponent,
    OpponentsBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
