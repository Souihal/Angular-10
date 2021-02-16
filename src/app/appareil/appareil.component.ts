import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../service/appareil-service.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  
  appareils : any[];
  
  appareilSubject : Subscription ;

  isAuth = false;
 constructor(private AppariellService:AppareilService){
  setTimeout(() => {
    this.isAuth=true;
  }, 4000);
 }
ngOnInit(){
  /*this.appareils=this.AppariellService.appareils;**/
  this.appareilSubject = this.AppariellService.apparielSubject.subscribe(
    (appariel : any[])=>{
      this.appareils = appariel;
    }
  );
  this.AppariellService.emitApparielSubject();
}
switchOnAll(){
  this.AppariellService.switchOnAll();
}
switchOffAll(){
  if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')){
  this.AppariellService.switchOffAll();
  }else{
    return null;
  }
}
onSave() {
  this.AppariellService.saveToServeur();
}
onFetch(){
  this.AppariellService.getAppareilsFromServer();
}

}
