import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-graph',
  templateUrl: './assignment-graph.component.html',
  styleUrls: ['./assignment-graph.component.css']
})
export class AssignmentGraphComponent {

  steps = ['Customer notified', 'Router Status Check', 'Firmware upgrade', 'Speed check', 'T2 Troubleshooting'];
  progressValue = 5; // Represents 100% completion
  circles = Array(5).fill(0);

}
