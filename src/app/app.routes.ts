import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'register', component:RegisterComponent},
    {path:'profile', component:ProfileComponent}

]
;
@NgModule({
    imports: [RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    
    
         ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }