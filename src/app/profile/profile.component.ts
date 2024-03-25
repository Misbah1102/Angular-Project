import { Component, Input } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
@Input() userData:any;



}
