import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-id',
  templateUrl: './assignment-id.component.html',
  styleUrls: ['./assignment-id.component.css']
})
export class AssignmentIdComponent {

  steps = ['Customer notified', 'Router Status Check', 'Firmware upgrade', 'Speed check', 'T2 Troubleshooting'];
  progressValue = 5; // Represents 100% completion
  circles = Array(5).fill(0);
}
