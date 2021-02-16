import { UserModule } from "../models/user/user.module";
import { Subject } from 'rxjs';

export class UserService {
   private users: UserModule[] = [
    new UserModule('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ];
   
   userSubject = new Subject<UserModule[]>();

   emitUsers(){
     this.userSubject.next(this.users.slice());
   }

   addUser(userModule : UserModule){
     this.users.push(userModule);
     this.emitUsers();

   }
}
