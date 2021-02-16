import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModule } from '../models/user/user.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit,OnDestroy {

  users : UserModule[];
  userSubscription : Subscription;

  constructor(private userService : UserService) { }

  ngOnInit(){
    this.userSubscription = this.userService.userSubject.subscribe(
      (users : UserModule[])=>{
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
