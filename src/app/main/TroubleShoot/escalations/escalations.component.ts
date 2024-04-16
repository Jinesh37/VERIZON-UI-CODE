import { Component } from '@angular/core';

@Component({
  selector: 'app-escalations',
  templateUrl: './escalations.component.html',
  styleUrls: ['./escalations.component.css']
})
export class EscalationsComponent {

  steps = ['Customer notified', 'Router Status Check', 'Firmware upgrade', 'Speed check', 'T2 Troubleshooting'];
  progressValue = 5; // Represents 100% completion
  circles = Array(5).fill(0);

}
