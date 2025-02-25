import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';

@Component({
  selector: 'app-slotbooking',
  imports: [CommonModule,HeaderComponent],
  templateUrl: './slotbooking.component.html',
  styleUrl: './slotbooking.component.scss'
})
export class SlotbookingComponent {
  availableslots: any = [
    {
      name: "A",
      available: 1,
      slot1: true,
      slot2: false
    },
    {
      name: "B",
      available: 2,
      slot1: false,
      slot2: true
    },
    {
      name: "C",
      available: 0,
      slot1: false,
      slot2: false
    },
    {
      name: "D",
      available: 3,
      slot1: true,
      slot2: true
    }
  ];

}
