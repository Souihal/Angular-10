import { Component, OnDestroy, OnInit} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{

  seconndes : number;
  counterSubscription : Subscription ;

  constructor(){}

  ngOnInit(){
    const counte= interval(1000);
    this.counterSubscription= counte.subscribe(
      (value:number)=>{
        this.seconndes =  value;
      }
    );
  }
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

}
