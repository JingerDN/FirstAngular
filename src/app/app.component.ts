import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { UserService } from './services/user.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  technologies=[
    "Angular",
    "React",
    "Vue"
  ];
  versionsA=["1.1.1","1.2.1","1.3.3"];
  versionsR=["2.1.2","3.2.4","4.3.1"];
  versionsV=["3.3.1","5.2.1","5.1.3"];
  
  isAngular=false;
  isReact=false;
  isVue=false;

  constructor(private userService: UserService,private fb: FormBuilder) {}

  bigForm = this.fb.group({
    userFirstName:this.fb.control( '',[Validators.required, Validators.pattern('[a-zA-Z]*')]),
    userLastName:this.fb.control('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    dateOfBirth:this.fb.control('', [Validators.required]),
    technology:this.fb.control('',Validators.required),
    version:this.fb.control('', Validators.required),
    hobbies: this.fb.array([
      this.fb.control('',Validators.required)
    ]),
    emailControl:this.fb.control('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: this.userService.uniqueEmailValidator(),
      updateOn: 'blur',
    })
  })

    get userFirstName(){
      return this.bigForm.get('userFirstName');
    }
    get userLastName(){
      return this.bigForm.get('userLastName');
    }
    get dateOfBirth(){
      return this.bigForm.get('dateOfBirth');
    }
    get technology(){
      return this.bigForm.get('technology');
    }
    get version(){
      return this.bigForm.get('version');
    }
    get emailControl(){
      return this.bigForm.get('emailControl');
    }
    get hobbies() {
      return this.bigForm.get('hobbies') as FormArray;
    }


    addHobby() {
      this.hobbies.push(this.fb.control(''));
      this.bigForm.patchValue({
      })

    }
    deleteHobby(index:number){
      this.hobbies.removeAt(index);
      this.bigForm.patchValue({
      })
    } 

    selectTechnology(event:any){
      this.isAngular=false;
      this.isReact=false;
      this.isVue=false;
    if(event==="Angular"){
      this.isAngular=true;
      console.log("angular",this.isAngular);
      this.bigForm.patchValue({
        version:this.versionsA
      })
    }
    if(event==="React"){
      this.isReact=true;
      console.log("rect",this.isReact);
      this.bigForm.patchValue({
        version:this.versionsR
      })
    }
    else if(event==="Vue"){
      this.isVue=true;
      console.log("Vue checked",this.isVue);
      this.bigForm.patchValue({
        version:this.versionsV
      })
    }}

    updateProfile() {
      this.bigForm.patchValue({
      });
    }
    onSubmit() {
      console.warn(this.bigForm.value);
    }
 
}


