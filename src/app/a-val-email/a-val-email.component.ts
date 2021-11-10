import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable,of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-a-val-email',
  templateUrl: './a-val-email.component.html',
  styleUrls: ['./a-val-email.component.scss']
})
export class AValEmailComponent implements OnInit {

  userEmail!:FormControl

  private readonly emailName=['test@test.test'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userEmail=this.fb.control(
      null,
      Validators.required,
      this.userValidator(),
      )
  }

  
  private emailAlreadyExists(userEmail:string):Observable<boolean>{
    return of (this.emailName.includes(userEmail)).pipe(delay(3000))
  }

private userValidator():AsyncValidatorFn{
  return (control:AbstractControl):Observable <ValidationErrors | null>=>
    //API call
    this.emailAlreadyExists(control.value).pipe(
      map((response)=>(response?{emailAlreadyExists:true}:null)),
      catchError(() => null)
    )
}
}

