import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.scss']
})
export class CardProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gridColumns = 2;
}
