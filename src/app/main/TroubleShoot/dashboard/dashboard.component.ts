import { Component } from '@angular/core';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  OutdoorData = [
    {
      name: 'Online',
      value: 8,
    },

    {
      name: 'Offline',
      value: 1,
    }
  ];

  IndoorData = [
    {
      name: 'Online',
      value: 1,
    },

    {
      name: 'Offline',
      value: 3,
    }
  ];

  PortsData = [
    {
      name: 'Unused',
      value: 2,
    },

    {
      name: 'Used',
      value: 0,
    }
  ];

 WirelessData = [
    {
      name: '5 GHz',
      value: 180,
    },

    {
      name: '2.4 GHz',
      value: 0,
    }
  ];

  SSIDData = [
    {
      name: 'Encrypted',
      value: 251,
    },

    {
      name: 'Open',
      value: 2,
    }
  ];


  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#FF0000'],
  };

  greycolorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#A9A9A9','#0418BD'],
  };

  
 wirelesscolorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#0418BD', '#03D7F9'],
  };

 ssidcolorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#600261', '#080261'],
  };


  public legendPosition: LegendPosition = LegendPosition.Below;


}
