import { Component} from '@angular/core';
@Component({
  selector: 'app-assignment-map',
  templateUrl: './assignment-map.component.html',
  styleUrls: ['./assignment-map.component.css']
})
export class AssignmentMapComponent {

  steps = ['Customer notified', 'Router Status Check', 'Firmware upgrade', 'Speed check', 'T2 Troubleshooting'];
  progressValue = 5; // Represents 100% completion
  circles = Array(5).fill(0);
}
