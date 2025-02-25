import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../Component/header/header.component';

@Component({
  selector: 'app-mainbody',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.scss'
})
export class MainbodyComponent {

}
