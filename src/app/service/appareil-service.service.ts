import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  apparielSubject = new Subject<any>();

  private appareils =[
    {
      id:1,
      name:'Machine à laver',
      status:'étient'
    },
    {
      id:2,
      name:'frigo',
      status:'étient'
    },
    {
      id:3,
      name:'Ordinateur',
      status:'allumé'
    }
  ];

  constructor(private httpClient:HttpClient) { }

  emitApparielSubject(){
    this.apparielSubject.next(this.appareils.slice());
  }


  getAppareilParId(id:number){
    const appareil=this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll(){
    for(let appareil of this.appareils){
      appareil.status='allumé';
    }
    this.emitApparielSubject();
  }
  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status='étient';
    }
    this.emitApparielSubject();
  }
  switchOneOn(index:number){
    this.appareils[index].status='allumé';
    this.emitApparielSubject();
    }
  
  switchOneOff(index:number){
    this.appareils[index].status='étient';
    this.emitApparielSubject();
  }

  addAppareil(name:string,status:string){
    const appareilOject= {
      id : 0,
      name :'',
      status:''
    };
    appareilOject.name=name;
    appareilOject.status=status;
    appareilOject.id=this.appareils[(this.appareils.length-1)].id+1;

    this.appareils.push(appareilOject);
    this.emitApparielSubject();
  }

  saveToServeur(){
    this.httpClient.put('https://http-client-85e43-default-rtdb.firebaseio.com/appareils.json',this.appareils)
    .subscribe(
      () =>{
        console.log("enrgistrement terminé");
      },
      (error)=>{
        console.log("probleme de "+error);
      }
    );
  }
  getAppareilsFromServer() {
    this.httpClient.get<any[]>('https://http-client-85e43-default-rtdb.firebaseio.com/appareils.json')
    .subscribe(
      (response)=>{
         this.appareils=response;
         this.emitApparielSubject();
      },
      (error)=>{
        console.log('Error ! '+error);
      }
    )
  }
}