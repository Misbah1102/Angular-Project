import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from "./profile/profile.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, RegisterComponent, MatSliderModule, MatIconModule, MatChipsModule,
        HttpClientModule, ProfileComponent]
})
export class AppComponent {
  title = 'REgister';
  profileData:any;
  register(data:any):void{
    this.profileData=data;

  }

}
