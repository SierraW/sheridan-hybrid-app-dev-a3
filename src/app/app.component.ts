import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Schools COVID-19 Data', url: 'school-covid19-data', icon: 'mail' },
    { title: 'Public Health Unit', url: 'public-health-unit', icon: 'paper-plane' },
    { title: 'Ongoing Outbreaks', url: 'ongoing-outbreak', icon: 'heart' },
  ];
  constructor() {}
}
