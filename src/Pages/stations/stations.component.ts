import { CommonModule } from '@angular/common';
import { Component,NgModule } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stations',
  imports: [CommonModule, HeaderComponent,RouterLink],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss'
})
export class StationsComponent {
  chargingStations = [
    { name: 'Station 1', address: 'Address Line 1' },
    { name: 'Station 2', address: 'Address Line 2' },
    { name: 'Station 3', address: 'Address Line 3' },
    { name: 'Station 4', address: 'Address Line 4' }
  ];
}
