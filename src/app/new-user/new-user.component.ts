import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModule } from '../models/user/user.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm : FormGroup ;

  constructor(private formbuilder:FormBuilder,
              private userService:UserService,
              private router:Router) { }

  ngOnInit(){
    this.initform();
  }

  initform(){
    this.userForm = this.formbuilder.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email :['',[Validators.required,Validators.email]],
      drinkPrefernce :['',Validators.required],
      hobbies : this.formbuilder.array([])
    });
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new UserModule(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPrefernce'],
      formValue['hobbies'] ? formValue['hobbies'] : ['']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobbies(){
    const newHobbyControl = this.formbuilder.control('',Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}
