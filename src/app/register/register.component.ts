import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import { MatCommonModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from "../home/home.component";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface Tags {
  name: string;
}


@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    imports: [ReactiveFormsModule,MatSelectModule,MatFormFieldModule,MatInputModule,MatIconModule,
        MatChipsModule, MatCommonModule, MatListModule, MatSliderModule, MatToolbarModule, HomeComponent]
})
export class RegisterComponent {
  photoError: boolean =false;

 formdata:any={};

  registerForm!: any;

// interests: string[] = [];

constructor(private formBuilder:FormBuilder, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.registerForm=this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{1,20}$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{1,20}$/)]],
         })
  }
  onSubmit() {
    this.http.post<any>('http://localhost:3000/data', this.formdata)
      .subscribe(response => {
        console.log('Data saved successfully:', response);
        
        this.formdata = {};
      }, error => {
        console.error('Error occurred:', error);
      });
  }

  redir() {
    this.router.navigate(['/profile']);
  }



      formatLabel(value: number): string {
        if (value >= 100) {
          return Math.round(value / 100) + 'k';
        }
    
        return `${value}`;
      }

      addOnBlur = true;
      // readonly separatorKeysCodes =  [ENTER, COMMA] as const;
      tags: Tags[] = [{name: 'cricket'}, {name: 'hockey'}, {name: 'football'}];
    
      announcer = inject(LiveAnnouncer);
    
      add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
    
        // Add our fruit
        if (value) {
          this.tags.push({name: value});
        }
    
        
        event.chipInput!.clear();
      }
    
      remove(tags: Tags): void {
        const index = this.tags.indexOf(tags);
    
        if (index >= 0) {
          this.tags.splice(index, 1);
    
          this.announcer.announce(`Removed ${tags}`);
        }
      }
    
      edit(tags: Tags, event: MatChipEditedEvent) {
        const value = event.value.trim();
    
        if (!value) {
          this.remove(tags);
          return;
        }
    
        // Edit existing fruit
        const index = this.tags.indexOf(tags);
        if (index >= 0) {
          this.tags[index].name = value;
        }
      }

     
    
    




onPhotoChange(event: any): void {
  const file = event.target.files[0];
  if (file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = () => {
          if (img.width === 310 && img.height === 325) {
            this.registerForm.get('photo').setValue(file);
            this.photoError = false;
          } else {
            this.photoError = true;
            alert("you cannot upload this image! search on some other one")
          }
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
   }
}



}


