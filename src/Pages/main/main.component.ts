import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';
import { MainbodyComponent } from "../mainbody/mainbody.component";
import { SlotbookingComponent } from '../slotbooking/slotbooking.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, MainComponent, MainbodyComponent,SlotbookingComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
