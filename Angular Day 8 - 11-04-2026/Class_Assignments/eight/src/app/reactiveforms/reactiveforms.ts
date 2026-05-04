import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
})
export class Reactiveforms {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.minLength(8), Validators.required]),
    currency: new FormControl(),
    gender: new FormControl(),
    tandc: new FormControl(),
    skills: new FormArray([]),
    ConfirmPassword : new FormControl('', [Validators.required])
  });

  

  handleSubmit(){
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }

   public get skills(){
    return this.loginForm.get('skills') as FormArray;
    }

  handleCheckBoxes(event:Event){
    let html = event.target as HTMLInputElement;
    if(html.checked){
      this.skills.push(new FormControl(html.value));
    }
    else{
      let index = this.skills?.controls.findIndex((ele) => ele.value==html.value);
      if (index !== -1) {
        this.skills.removeAt(index);
      }

    }
  }
 
  
}

 export function checkPass(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;

  const hasAlphaNum = /[a-zA-Z0-9]/.test(value);

  if (!hasAlphaNum) {
    return { invalidPassword: 'Password must contain letters or numbers' };
  }

  return null;
}