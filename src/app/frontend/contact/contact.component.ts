import { Component, OnInit } from '@angular/core';
// import {FormBuilder,FormGroup,Validation} from '@angular/forms;'
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup
  submitted:boolean = false
  success:boolean = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.contactForm = this.formBuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    tel:['',Validators.required]
  })
  }

  //geter to access form fields
  get f() {return this.contactForm.controls}

  onSubmit(){
    // alert("OK!")
    this.submitted = true;

    //stop this form is invalid
    if(this.contactForm.invalid)
    {
      return;
    }
    alert('SUCCESS'+JSON.stringify(this.contactForm.value));
  }
}
