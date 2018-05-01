import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Board } from '../Models/Board'

@Component({
  selector: 'app-board-creation',
  templateUrl: './board-creation.component.html',
  styleUrls: ['./board-creation.component.css']
})
export class BoardCreationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

}
