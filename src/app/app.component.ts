import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../Component/header/header.component';
import { MainbodyComponent } from '../Pages/mainbody/mainbody.component';
import { SlotbookingComponent } from '../Pages/slotbooking/slotbooking.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainbodyComponent, SlotbookingComponent,RouterOutlet],
  templateUrl: './app.component.html',
  template:'<app-header/>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ev-charging';
}
