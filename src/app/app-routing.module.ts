import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router'

import { BoardCreationComponent } from './board-creation/board-creation.component';
import { GameplayComponent }   from './gameplay/gameplay.component';
import { HomeComponent }  from './home/home.component';
import { OpponentsBoardComponent }  from './opponents-board/opponents-board.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'create-board', component: BoardCreationComponent},
  { path: 'play', component: GameplayComponent },
  { path: 'home', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
