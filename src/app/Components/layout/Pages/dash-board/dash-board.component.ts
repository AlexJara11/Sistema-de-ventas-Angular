import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
import { DashBoardService } from '../../../../Services/dash-board.service';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent implements OnInit {
  ngOnInit(): void {
  }

}
